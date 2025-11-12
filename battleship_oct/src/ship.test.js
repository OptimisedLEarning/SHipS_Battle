// src/models/Ship.test.js
import Ship from './ship.js';

test('Ship creates with correct length', () => {
  const myShip = new Ship(4); // A ship of length 4
  expect(myShip.length).toBe(4);
});


test('hit() increases number of hits', () => {
  const myShip = new Ship(4);
  myShip.hit();
  expect(myShip.hits).toBe(1);
});

test('isSunk() returns true when hits equal length', () => {
  const myShip = new Ship(3);
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});


test('isSunk() returns false when hits are less than length', () => {
  const myShip = new Ship(3);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
});