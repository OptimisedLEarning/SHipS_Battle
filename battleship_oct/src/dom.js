// Set CSS variable for grid size
function setGridSize(size) {
  document.documentElement.style.setProperty('--size', size);
}

/**
 * generateGrid: Creates the visual grid of cells
 * WHAT: Creates 100 square cells (10x10) and puts them on the page
 * WHY: Players need to SEE the board to click and play
 * HOW: Uses a loop to create buttons and add them to the HTML
 */
export function generateGrid(container, size) {
  setGridSize(size);
  container.innerHTML = ''; // Clear existing cells
  
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.dataset.index = i;
    container.appendChild(cell);
  }
}

// Render a board from model state into the DOM container
export function renderBoard(board, container, revealShips = false) {
  // Ensure container has cells
  const size = board.size || 10;
  if (container.children.length !== size * size) {
    generateGrid(container, size);
  }

  // Clear classes
  Array.from(container.children).forEach((cell) => {
    cell.classList.remove('ship', 'hit', 'miss');
    cell.disabled = false;
  });

  // Mark missed attacks
  board.missedAttacks.forEach(({ x, y }) => {
    const index = y * size + x;
    const cell = container.querySelector(`[data-index="${index}"]`);
    if (cell) {
      cell.classList.add('miss');
      cell.disabled = true;
    }
  });

  // Mark successful attacks
  board.successfulAttacks.forEach(({ x, y }) => {
    const index = y * size + x;
    const cell = container.querySelector(`[data-index="${index}"]`);
    if (cell) {
      cell.classList.add('hit');
      cell.disabled = true;
    }
  });

  // Optionally reveal ships (for player board)
  if (revealShips && Array.isArray(board.ships)) {
    board.ships.forEach((ship) => {
      // Find ship positions by scanning grid
      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          if (board.grid[y][x] === ship) {
            const index = y * size + x;
            const cell = container.querySelector(`[data-index="${index}"]`);
            if (cell) cell.classList.add('ship');
          }
        }
      }
    });
  }
}

/**
 * enableEnemyClicks: Let players attack the enemy board
 * WHAT: When you click enemy board cells, it registers as an attack
 * WHY: This is how the player makes moves!
 * HOW: Listen for clicks and call the game logic
 */
export function enableEnemyClicks(container, enemyBoard, onAttackDone) {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell') && !e.target.disabled) {
      const index = parseInt(e.target.dataset.index);
      const x = index % 10;
      const y = Math.floor(index / 10);
        const result = enemyBoard.receiveAttack({ x, y });

        // Re-render enemy board to reflect hit/miss and disable cell
        renderBoard(enemyBoard, container, false);

        // Notify caller (index.js) with the actual result (null | 'hit' | 'miss') and coords
        if (typeof onAttackDone === 'function') onAttackDone(result, { x, y, index });
    }
  });
}

/**
 * computerTurn: AI makes a random attack
 * WHAT: The computer picks a random spot on your board and attacks
 * WHY: Battleship is a 2-player game, computer is the opponent!
 * HOW: Pick random coordinates, attack, show the result
 */
export function computerTurn(playerBoard, tried, playerGridEl, turnEl, onResult) {
  let x, y;
  const move = pickRandomLegalMove(playerBoard, tried);
  if (!move) return; // no moves left
  x = move.x; y = move.y;
  tried.add(`${x},${y}`);
  const result = playerBoard.receiveAttack({ x, y });

  // Render the updated player board (reveal ships)
  renderBoard(playerBoard, playerGridEl, true);

  if (result === 'hit') {
    if (turnEl) turnEl.textContent = '💥 You were HIT! Computer attacks again!';
    if (typeof onResult === 'function') onResult('hit', { x, y });
    setTimeout(() => computerTurn(playerBoard, tried, playerGridEl, turnEl, onResult), 50);
  } else if (result === 'miss') {
    if (turnEl) turnEl.textContent = '✨ Computer missed! Your turn!';
    if (typeof onResult === 'function') onResult('miss', { x, y });
  }
}

// Helper: find a random legal move (not tried before and not already attacked on board)
export function pickRandomLegalMove(board, triedSet) {
  const size = board.size || 10;
  const allMoves = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const key = `${x},${y}`;
      const alreadyMiss = board.missedAttacks.some(a => a.x === x && a.y === y);
      const alreadyHit = board.successfulAttacks.some(a => a.x === x && a.y === y);
      if (!alreadyMiss && !alreadyHit && !triedSet.has(key)) allMoves.push({ x, y });
    }
  }
  if (allMoves.length === 0) return null;
  return allMoves[Math.floor(Math.random() * allMoves.length)];
}

/**
 * checkGameOver: Has someone won?
 * WHAT: Checks if all ships are sunk
 * WHY: The game needs to know when to stop!
 * HOW: Count remaining ship health
 */
export function checkGameOver(board) {
  // Prefer a board helper if available
  if (typeof board.allShipsSunk === 'function') {
    const over = board.allShipsSunk();
    if (over) {
      // caller should handle UI messaging
      return true;
    }
    return false;
  }

  // Fallback: check ship.isSunk() for each ship
  if (Array.isArray(board.ships)) {
    const allSunk = board.ships.every(ship => typeof ship.isSunk === 'function' && ship.isSunk());
    if (allSunk) {
      // caller should handle UI messaging
      return true;
    }
  }
  return false;
}