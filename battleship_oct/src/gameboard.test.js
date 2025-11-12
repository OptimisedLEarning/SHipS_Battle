// src/models/Gameboard.test.js
import Gameboard from './gameboard.js';
import Ship from './ship.js'; // We'll need this, too

test('Gameboard can place a ship', () => {
  const board = new Gameboard(); // 10x10 board
  const ship = new Ship(3);
  board.placeShip(ship, { x: 0, y: 0 }, 'horizontal');
  // How to test this? We need a way to see what's on the board.
  // Let's attack it and see.
  expect(board.receiveAttack({ x: 0, y: 0 })).toBe('hit');
  expect(board.receiveAttack({ x: 1, y: 0 })).toBe('hit');
  expect(board.receiveAttack({ x: 2, y: 0 })).toBe('hit');
});


// ... (inside Gameboard.test.js)
test('Gameboard records missed attacks', () => {
  const board = new Gameboard(); // 10x10 board
  board.receiveAttack({ x: 5, y: 5 });     // Attack an empty spot
  expect(board.missedAttacks).toContainEqual({ x: 5, y: 5 });
});


// ... (inside Gameboard.test.js)
test('Gameboard reports all ships are sunk', () => {
  const board = new Gameboard(10);
  const ship1 = new Ship(1);
  const ship2 = new Ship(1);
  board.placeShip(ship1, { x: 0, y: 0 });
  board.placeShip(ship2, { x: 1, y: 1 });

  board.receiveAttack({ x: 0, y: 0 }); // Sink ship 1
  expect(board.allShipsSunk()).toBe(false); // Ship 2 is still alive

  board.receiveAttack({ x: 1, y: 1 }); // Sink ship 2
  expect(board.allShipsSunk()).toBe(true); // All ships are now sunk
});