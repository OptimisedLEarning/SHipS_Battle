import { pickRandomLegalMove } from '../dom.js';
import Gameboard from '../gameboard.js';

test('pickRandomLegalMove does not return already attacked cells', () => {
  const board = new Gameboard(5);
  board.missedAttacks.push({ x: 0, y: 0 });
  board.successfulAttacks.push({ x: 1, y: 1 });
  const tried = new Set(['2,2']);
  const move = pickRandomLegalMove(board, tried);
  expect(move).not.toEqual({ x: 0, y: 0 });
  expect(move).not.toEqual({ x: 1, y: 1 });
  expect(move).not.toEqual({ x: 2, y: 2 });
});

test('pickRandomLegalMove returns null when no moves left', () => {
  const board = new Gameboard(2);
  // fill all positions as missed
  for (let y = 0; y < 2; y++) {
    for (let x = 0; x < 2; x++) {
      board.missedAttacks.push({ x, y });
    }
  }
  const move = pickRandomLegalMove(board, new Set());
  expect(move).toBeNull();
});
