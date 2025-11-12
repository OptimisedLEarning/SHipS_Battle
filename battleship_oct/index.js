import Gameboard from './gameboard.js';
import Ship from './ship.js';
import { generateGrid, renderBoard, enableEnemyClicks, computerTurn, checkGameOver } from './dom.js';
import { pickRandomLegalMove } from './dom.js';

// DOM containers used by the UI functions
const playerGridEl = document.querySelector('[data-board="player"]');
const enemyGridEl = document.querySelector('[data-board="enemy"]');
const turnEl = document.querySelector('[data-turn]');

const start_button = document.getElementById('start');
const rotate_button = document.getElementById('rotate');
const auto_place_button = document.getElementById('auto-place');

start_button.addEventListener('click', () => {
  // 1) Models
  const playerBoard = new Gameboard();
  const enemyBoard  = new Gameboard();
  // 2) Ships list (we'll place these)
  const shipsToPlace = [
    new Ship('Carrier', 5),
    new Ship('Battleship', 4),
    new Ship('Cruiser', 3),
    new Ship('Submarine', 3),
    new Ship('Destroyer', 2),
  ];

  // Helper: auto-place ships randomly on a board
  function autoPlaceShips(board, ships) {
    const size = board.size || 10;
    ships.forEach((ship) => {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 1000) {
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        if (board.canPlace(ship, { x, y }, orientation)) {
          board.placeShip(ship, { x, y }, orientation);
          placed = true;
        }
        attempts += 1;
      }
      if (!placed) throw new Error('Failed to auto-place ship: ' + ship.name);
    });
  }

  // By default, auto-place enemy ships
  autoPlaceShips(enemyBoard, shipsToPlace.map(s => new Ship(s.name, s.length)));

  // 4) Render 10×10 buttons for both boards
  generateGrid(playerGridEl, 10);
  generateGrid(enemyGridEl, 10);
  // Initial render: show empty player board (we'll place ships manually)
  renderBoard(playerBoard, playerGridEl, true);
  renderBoard(enemyBoard, enemyGridEl, false);

  // Placement mode state
  let orientation = 'horizontal';
  let currentIndex = 0; // index into shipsToPlace

  function updateRotateButton() {
    rotate_button.textContent = `Rotate (R): ${orientation}`;
  }
  updateRotateButton();

  // Auto-place button for player
  auto_place_button.addEventListener('click', () => {
    autoPlaceShips(playerBoard, shipsToPlace);
    renderBoard(playerBoard, playerGridEl, true);
    // All placed -> start game
    startGame();
  });

  // Simple audio feedback
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  function playBeep(frequency = 440, type = 'sine', duration = 0.08) {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type;
    o.frequency.value = frequency;
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    g.gain.setValueAtTime(0.001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
    setTimeout(() => {
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      o.stop(audioCtx.currentTime + duration + 0.02);
    }, duration * 1000);
  }

  // Toggle rotate (button + keyboard R)
  rotate_button.addEventListener('click', () => {
    orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
    updateRotateButton();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
      orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
      updateRotateButton();
    }
  });

  // Preview and place handlers
  function clearPreview() {
    Array.from(playerGridEl.children).forEach(c => c.classList.remove('preview', 'invalid'));
  }

  function showPreviewAt(index) {
    clearPreview();
    const ship = shipsToPlace[currentIndex];
    if (!ship) return;
    const size = playerBoard.size || 10;
    const x0 = index % size;
    const y0 = Math.floor(index / size);
    const coords = { x: x0, y: y0 };
    const valid = playerBoard.canPlace(ship, coords, orientation);
    for (let i = 0; i < ship.length; i += 1) {
      const x = orientation === 'horizontal' ? x0 + i : x0;
      const y = orientation === 'vertical' ? y0 + i : y0;
      if (x < 0 || x >= size || y < 0 || y >= size) return; // out of bounds
      const idx = y * size + x;
      const cell = playerGridEl.querySelector(`[data-index="${idx}"]`);
      if (cell) {
        cell.classList.add('preview');
        if (!valid) cell.classList.add('invalid');
      }
    }
  }

  function onPlayerGridMouseOver(e) {
    if (!e.target.classList.contains('cell')) return;
    const index = parseInt(e.target.dataset.index);
    showPreviewAt(index);
  }

  function onPlayerGridMouseOut() {
    clearPreview();
  }

  function onPlayerGridClick(e) {
    if (!e.target.classList.contains('cell')) return;
    const index = parseInt(e.target.dataset.index);
    const size = playerBoard.size || 10;
    const x = index % size;
    const y = Math.floor(index / size);
    const ship = shipsToPlace[currentIndex];
    if (!ship) return;
    if (playerBoard.canPlace(ship, { x, y }, orientation)) {
      playerBoard.placeShip(ship, { x, y }, orientation);
      playBeep(700, 'sine', 0.08); // placement sound
      currentIndex += 1;
      renderBoard(playerBoard, playerGridEl, true);
      clearPreview();
      if (currentIndex >= shipsToPlace.length) {
        // all ships placed
        startGame();
      }
    } else {
      // invalid placement; simple feedback
      turnEl.textContent = 'Invalid placement. Try a different position or orientation.';
      playBeep(220, 'sawtooth', 0.12); // error sound
      // briefly flash invalid preview by re-showing
      showPreviewAt(index);
    }
  }

  // Attach placement listeners
  playerGridEl.addEventListener('mouseover', onPlayerGridMouseOver);
  playerGridEl.addEventListener('mouseout', onPlayerGridMouseOut);
  playerGridEl.addEventListener('click', onPlayerGridClick);

  // Track computer memory for no-repeat shots
  const tried = new Set();

  function startGame() {
    // Remove placement listeners
    playerGridEl.removeEventListener('mouseover', onPlayerGridMouseOver);
    playerGridEl.removeEventListener('mouseout', onPlayerGridMouseOut);
    playerGridEl.removeEventListener('click', onPlayerGridClick);

    // Final render
    renderBoard(playerBoard, playerGridEl, false);

    // Enable player attacks against enemy via click delegation
    enableEnemyClicks(enemyGridEl, enemyBoard, (result, coords) => {
      if (result === null) return; // duplicate click, ignore
      // spawn particles at enemy grid when player hits/misses
      if (coords) spawnParticlesAt(enemyGridEl, coords.x, coords.y, result === 'hit');
      // Play sound for hit/miss
      if (result === 'hit') playBeep(1000, 'sine', 0.12);
      else if (result === 'miss') playBeep(400, 'triangle', 0.08);

      // After the player's attack, check game over and then run computer turn
      if (checkGameOver(enemyBoard)) {
        showVictory('You win!');
        return;
      }
      computerTurn(playerBoard, tried, playerGridEl, turnEl, (res, c) => {
        // spawn particles at coords on playerGridEl
        if (c) spawnParticlesAt(playerGridEl, c.x, c.y, res === 'hit');
        if (res === 'hit') playBeep(900, 'sine', 0.12);
        else if (res === 'miss') playBeep(300, 'square', 0.08);
        // if computer caused player to lose
        if (checkGameOver(playerBoard)) showVictory('You lost!');
      });
      if (checkGameOver(playerBoard)) {
        showVictory('You lost!');
        return;
      }
    });
  }

  // Spawn small particles at grid coordinate (x,y) inside container
  function spawnParticlesAt(container, x, y, isHit) {
    const size = playerBoard.size || 10;
    const index = y * size + x;
    const cell = container.querySelector(`[data-index="${index}"]`);
    if (!cell) return;
    const rect = container.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const offsetX = cellRect.left - rect.left + cellRect.width / 2;
    const offsetY = cellRect.top - rect.top + cellRect.height / 2;
    for (let i = 0; i < 8; i += 1) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${offsetX + (Math.random() - 0.5) * 10}px`;
      p.style.top = `${offsetY + (Math.random() - 0.5) * 10}px`;
      p.style.background = isHit ? 'crimson' : 'steelblue';
      container.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  }

  // Victory overlay + confetti
  function showVictory(message = 'You win!') {
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.innerHTML = `<div class="victory">${message}</div><div style="display:flex;gap:10px"><button id="restart-overlay">Restart</button><button id="close-overlay">Close</button></div><div class="confetti"></div>`;
      document.body.appendChild(overlay);
      document.getElementById('close-overlay').addEventListener('click', () => overlay.remove());
      document.getElementById('restart-overlay').addEventListener('click', () => restartGame());
    }
    // spawn confetti pieces
    const confetti = overlay.querySelector('.confetti');
    for (let i = 0; i < 80; i += 1) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      // varied horizontal start
      piece.style.left = Math.random() * 100 + '%';
      // varied size
      const w = 6 + Math.random() * 12;
      piece.style.width = `${w}px`;
      piece.style.height = `${w * 1.2}px`;
      piece.style.background = `hsl(${Math.random() * 360}, 80%, ${50 + Math.random() * 20}%)`;
      // varied animation speed and delay for 'physics'
      piece.style.animationDuration = `${1000 + Math.random() * 1200}ms`;
      piece.style.animationDelay = `${Math.random() * 300}ms`;
      // random initial rotation
      piece.style.transform = `translateY(-10vh) rotate(${Math.random() * 360}deg)`;
      // small horizontal drift using CSS variable (not animated directly)
      piece.dataset.drift = (Math.random() - 0.5) * 40; // px
      confetti.appendChild(piece);
      // slightly stagger removal
      setTimeout(() => piece.remove(), 1800 + Math.random() * 800);
    }
    // apply small JS-based horizontal drift to give varied velocity feel
    const pieces = Array.from(confetti.children);
    pieces.forEach((p) => {
      const drift = parseFloat(p.dataset.drift) || 0;
      const dur = parseFloat(p.style.animationDuration) || 1600;
      // animate horizontal using requestAnimationFrame over duration
      const start = performance.now();
      const initialLeft = parseFloat(p.style.left);
      function frame(now) {
        const t = Math.min(1, (now - start) / dur);
        // quadratic ease-out movement
        const ease = 1 - (1 - t) * (1 - t);
        p.style.left = `${initialLeft + drift * ease}%`;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  function restartGame() {
    // Simple reset: reload the page to clear state
    window.location.reload();
  }

  // Note: attack handling and computer turn are started from startGame()
});