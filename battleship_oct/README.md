# 🎮 Battleship Game

A classic **Battleship** game built with vanilla JavaScript, featuring manual/automatic ship placement, turn-based gameplay against a computer AI, animated effects, and a fully tested model layer.

## ✨ Features

- 🚢 **Ship Placement**: Manual placement with preview (click to place, press R to rotate) or auto-place
- 🎯 **Gameplay**: Turn-based attacks on a 10×10 grid
- 🤖 **AI Opponent**: Computer makes random legal moves (never shoots twice)
- 💥 **Animations**: Hit/miss particles, cell animations, victory confetti
- 🔊 **Sound Effects**: Beeps for placement, attacks, and hits
- ✅ **Fully Tested**: Ship, Gameboard, Player models with Jest unit tests (10/10 passing)
- 🎨 **Clean Architecture**: Separated concerns (Model-View-Controller pattern)

## 🎮 How to Play

1. **Start**: Click the **Start** button
2. **Place Ships**: 
   - Hover to see placement preview (orange = valid, red = invalid)
   - Press **R** or click **Rotate** to toggle orientation
   - Click a cell to place the current ship
   - Repeat for all 5 ships
   - Or click **Auto-place My Ships** to place randomly
3. **Battle**:
   - Click enemy board cells to attack
   - Computer will reply
   - First to sink all opponent's ships wins!
4. **Victory**: Confetti + overlay when game ends

## 📁 Project Structure

```
battleship_oct/
├── src/
│   ├── index.html          # Main HTML file
│   ├── style.css           # All styles (separated)
│   ├── index.js            # App controller & game loop
│   ├── ship.js             # Ship model (length, hits, isSunk)
│   ├── gameboard.js        # Gameboard model (grid, placement, attacks)
│   ├── player.js           # Player model (name, board)
│   ├── dom.js              # UI helpers (rendering, click handlers)
│   ├── ship.test.js        # Ship tests
│   ├── gameboard.test.js   # Gameboard tests
│   ├── player.test.js      # Player tests
│   └── __tests__/
│       └── dom.extra.test.js  # DOM helper tests
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+) installed
- npm (comes with Node)

### Installation

```bash
# Navigate to project folder
cd battleship_oct

# Install dependencies
npm install
```

### Run Tests

```bash
npm test
```

Expected output: **4 test suites, 10 tests passed** ✅

### Start Playing

Use **VS Code Live Server** extension:
1. Right-click `src/index.html` → **Open with Live Server**
2. Browser opens automatically

Or use a simple HTTP server:

```bash
npx http-server -c-1 src/ -p 8000
# Visit http://localhost:8000
```

## 🏗️ Architecture & Design Patterns

### Model-View-Controller (MVC)
- **Model**: `ship.js`, `gameboard.js`, `player.js` — pure game logic, fully testable
- **View**: `style.css`, rendering logic in `dom.js` — displays game state
- **Controller**: `index.js` — orchestrates user input and model updates

### Key Principles
1. **Single Responsibility**: Each file has one main job
2. **DRY (Don't Repeat Yourself)**: Reusable functions like `renderBoard`, `pickRandomLegalMove`
3. **Test-Driven**: Models tested before UI
4. **Separation of Concerns**: Models don't know about DOM; UI doesn't have game rules

## 🧪 Testing

All public APIs are tested:

```bash
npm test
```

Tests cover:
- Ship creation, hitting, sinking
- Gameboard ship placement, attacks, duplicate prevention
- Player creation with board
- DOM helper functions (render, legal move selection)

No test framework is tested for UI rendering (that's done manually in browser).

## 📋 Game Rules

- **5 ships**: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)
- **10×10 grid**: Standard Battleship board size
- **Attacks**: One per turn by active player; cannot attack same cell twice
- **Hit**: Cell shows red, attacker plays again
- **Miss**: Cell shows blue, turn passes to opponent
- **Win**: Sink all opponent's ships

## 🎯 How to Approach Development Like a Programmer

### When Adding Features:

1. **Break down into small, testable pieces**
   - Example: "Add particle effect" → expose coords + spawn function
2. **Test models before UI**
   - Write unit tests for game logic first
3. **Keep UI thin**
   - UI reads model state and renders; doesn't have game rules
4. **Commit frequently**
   - Small, focused commits are easier to review and debug
5. **Use console & debugger**
   - Chrome DevTools (F12) for debugging

### Example Workflow:

```javascript
// ❌ DON'T: Put game rules in UI
function onCellClick() {
  if (gameState.isPlayerTurn && notAlreadyAttacked(x, y)) {
    // ... game logic
  }
}

// ✅ DO: Call model methods, UI just renders
function onCellClick() {
  const result = enemyBoard.receiveAttack({ x, y });
  if (result !== null) renderBoard(enemyBoard); // only render if valid
}
```

## 🔧 Technologies Used

- **JavaScript**: ES6 modules, async/await, arrow functions
- **Jest**: Unit testing framework
- **HTML5**: Semantic structure
- **CSS3**: Flexbox, Grid, animations, keyframes
- **Web Audio API**: Sound synthesis for beeps

## 📚 Learning Resources

- **JavaScript Modules**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- **Jest Testing**: https://jestjs.io/
- **DOM Events**: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
- **CSS Grid & Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Game Development**: https://developer.mozilla.org/en-US/docs/Games

## 🚢 Future Enhancements

- [ ] Mute button for sound
- [ ] Difficulty levels (easy/hard AI)
- [ ] Two-player local multiplayer
- [ ] Responsive design for mobile
- [ ] Persistent high scores (localStorage)
- [ ] Better AI: hunting algorithm after first hit

## 🤝 Contributing

If you fork this and improve it:
1. Make your changes
2. Test with `npm test`
3. Create a pull request with a clear description

## 📄 License

MIT License — feel free to use and modify!

## 👤 Author

Your Name - [GitHub Profile](https://github.com/YOUR-USERNAME)

---

## ⭐ Enjoy! Questions?

If you get stuck:
1. Check DevTools console (F12) for errors
2. Review the game rules section
3. Look at test files for expected behavior
4. Read comments in source files for implementation details

**Good luck, and have fun! 🎮**









# Battleship Game: A Practical Programming Guide

> The simplest, practical programmatic guide to finishing this project and leveling up as a programmer.

## 📋 What You'll Learn

- ✅ Short project summary
- ✅ Single-file responsibilities
- ✅ Step-by-step pseudocode for the whole app
- ✅ How to approach features like a programmer
- ✅ Recommended learning links and practice tasks

---

## 🎮 Project Summary

**Build a Battleship game:** Model ships and boards → Let players place ships → Play turn-based attacks until all ships are sunk. Keep model logic testable and UI separate.

---

## 📁 File Responsibilities

| File | Purpose |
|------|---------|
| `ship.js` | Ship class — length, hits, `hit()`, `isSunk()` |
| `gameboard.js` | Gameboard — grid state, `placeShip()`, `receiveAttack()`, `allShipsSunk()` |
| `player.js` | Player — name, gameboard, `aiMove()` for AI |
| `dom.js` | UI helpers — `generateGrid()`, `renderBoard()`, `enableEnemyClicks()` |
| `index.js` | App wiring — create players, manage flow, minimal logic |
| `index.html` | Structure and styles |

---

## 🔄 Pseudocode: Entire App Flow

### **START**
```
1. Query DOM elements
2. Create playerBoard and enemyBoard
3. Create ships list
4. Auto-place enemy ships (random)
5. Allow player to place ships
```

### **PLACEMENT PHASE**
```
On hover:    Show preview cells (valid/invalid)
On click:    If valid → place ship → next ship
When done:   → START GAME
```

### **GAME LOOP**
```
Player's turn:
    → Click enemy board cell
    → receiveAttack(coords)
    → Render board
    → Check if won?
    → Else: computerTurn()

Computer's turn:
    → pickRandomLegalMove()
    → receiveAttack(coords)
    → Render player board
    → Check if lost?
    → Else: return to player
```

---

## 💻 Core Logic (Pseudocode)

### **Ship Class**
```javascript
constructor(length)
    this.length = length
    this.hits = 0

hit()
    this.hits++

isSunk()
    return this.hits >= this.length
```

### **Gameboard Class**
```javascript
constructor(size=10)
    grid = 2D array
    ships = []
    missedAttacks = []
    successfulAttacks = []

canPlace(ship, {x,y}, dir)
    → check bounds and empty cells

placeShip(ship, {x,y}, dir)
    → write ship to grid
    → ships.push(ship)

receiveAttack({x,y})
    if already attacked → return null
    if ship at coords → ship.hit() → return 'hit'
    else → return 'miss'

allShipsSunk()
    return ships.every(s => s.isSunk())
```

### **Utilities**
```javascript
pickRandomLegalMove(board, triedSet)
    → return random untried coord or null
```

---

## 🧠 How to Approach Features (Like a Programmer)

1. **Break into tiny, testable pieces** — "particle effect on hit" = expose coords + spawn function
2. **Test models first** — Ship and Gameboard are pure logic
3. **Keep UI thin** — Read model state, render it, avoid game rules in UI
4. **Iterate in small commits** — Implement, test in browser, refine
5. **Use tests as a safety net** — Run them after every change

---

## ⚠️ Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| Race conditions in loops | Use timeouts instead of deep recursion |
| Silent DOM failures | Check selectors, place scripts at body end |
| State duplication | Single source of truth in model |
| Tests breaking on UI changes | Keep tests separate, run frequently |

---

## 📚 Learning Resources

- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [TDD with Jest](https://jestjs.io/docs/getting-started)
- [DOM Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript Tutorial](https://javascript.info/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

## 🚀 App Flow Chart

```
┌─────────────────────────────────┐
│      START APPLICATION          │
└──────────────┬──────────────────┘
                             │
             ┌───────▼────────┐
             │  Create Boards │
             │  & Ships List  │
             └───────┬────────┘
                             │
         ┌─────────▼──────────┐
         │  Place Enemy Ships │
         │     (Auto)         │
         └─────────┬──────────┘
                             │
         ┌─────────▼──────────────────┐
         │  Player Place Ships        │
         │  (Manual or Auto)          │
         └─────────┬──────────────────┘
                             │
         ┌─────────▼──────────────────┐
         │    START GAME LOOP         │
         └─────────┬──────────────────┘
                             │
                 ┌─────▼──────────┐
                 │ Player's Turn  │
                 │ (Click Cell)   │
                 └─────┬──────────┘
                             │
                ┌──────▼────────┐
                │ receiveAttack │
                │ & Render      │
                └──────┬────────┘
                             │
                 ┌─────▼────────────┐
                 │ All Ships Sunk?  │
                 └──┬──────────┬────┘
                        │          │
                    YES        NO
                        │          │
            ┌─────▼──┐  ┌────▼──────────┐
            │ WON! ✓ │  │ Computer Turn │
            └────────┘  └────┬──────────┘
                                             │
                                 ┌─────▼─────────┐
                                 │ receiveAttack │
                                 │ & Render      │
                                 └─────┬─────────┘
                                             │
                                    ┌────▼──────────┐
                                    │ All Ships Sunk?│
                                    └──┬──────────┬──┘
                                         │          │
                                     YES        NO
                                         │          │
                                ┌────▼───┐  ┌───▼──────────┐
                                │ LOST ✗ │  │ Loop Back ↻  │
                                └────────┘  └──────────────┘
```

---

