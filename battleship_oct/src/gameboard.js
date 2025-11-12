// src/models/gameboard.js (or the path you use)
export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    this.ships = [];
    this.missedAttacks = [];
    this.successfulAttacks = [];
    this.sunkShips = [];
  }

  inBounds(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  canPlace(ship, { x, y }, direction = 'horizontal') {
    for (let i = 0; i < ship.length; i += 1) {
      const xx = direction === 'horizontal' ? x + i : x;
      const yy = direction === 'vertical' ? y + i : y;
      if (!this.inBounds(xx, yy)) return false;
      if (this.grid[yy][xx] !== null) return false;
    }
    return true;
  }

  placeShip(ship, coordinates, direction = 'horizontal') {
    const { x, y } = coordinates;
    if (!this.canPlace(ship, { x, y }, direction)) return false;
    for (let i = 0; i < ship.length; i += 1) {
      const xx = direction === 'horizontal' ? x + i : x;
      const yy = direction === 'vertical' ? y + i : y;
      this.grid[yy][xx] = ship;
    }
    this.ships.push(ship);
    return true;
  }

  receiveAttack(coordinates) {
    const { x, y } = coordinates;
    const target = this.grid[y][x];
    // Prevent duplicate attacks on the same coordinate
    const alreadyMiss = this.missedAttacks.some(a => a.x === x && a.y === y);
    const alreadyHit = this.successfulAttacks.some(a => a.x === x && a.y === y);
    if (alreadyMiss || alreadyHit) return null; // ignore duplicate
    if (target && typeof target.hit === 'function') {
      target.hit();
      this.successfulAttacks.push({ x, y });
      if (typeof target.isSunk === 'function' && target.isSunk() && !this.sunkShips.includes(target)) {
        this.sunkShips.push(target);
      }
      return 'hit';
    }
    this.missedAttacks.push({ x, y });
    return 'miss';
  }

  allShipsSunk() {
    return this.ships.length > 0 && this.ships.every((s) => typeof s.isSunk === 'function' && s.isSunk());
  }

 
}
