// src/models/Player.test.js
import Player from './player.js';

test('Player is created with a gameboard', () => {
  const player1 = new Player('Human');
  expect(player1.name).toBe('Human');
  // Check if it has a board. A good-enough check is to see
  // if we can call a board method.
  expect(player1.board.allShipsSunk).toBeDefined();
});