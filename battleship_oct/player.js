// src/models/Player.js
import Gameboard from './gameboard.js';

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard(10); // Each player gets a new 10x10 board!
  }
}