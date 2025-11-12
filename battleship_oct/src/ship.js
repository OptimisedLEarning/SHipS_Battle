// src/models/Ship.js
// Flexible Ship constructor: supports either new Ship(length) or new Ship(name, length)
export default class Ship {
  constructor(nameOrLength, maybeLength) {
    if (typeof nameOrLength === 'number') {
      this.length = nameOrLength;
      this.name = undefined;
    } else {
      this.name = nameOrLength;
      this.length = maybeLength;
    }
    // Ensure length is a number
    if (typeof this.length !== 'number' || Number.isNaN(this.length)) {
      throw new TypeError('Ship length must be a number');
    }
    this.hits = 0; // A new ship has 0 hits
  }

  // Record a hit on this ship
  hit() {
    this.hits += 1;
  }

  // Returns true when the number of hits >= length
  isSunk() {
    return this.hits >= this.length;
  }
}