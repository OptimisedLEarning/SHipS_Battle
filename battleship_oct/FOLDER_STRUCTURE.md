# Battleship Game - Folder Structure & Setup Guide

## 📁 Directory Structure

Your project is now organized in a single Git repository with the following structure:

```
SHipS_Battle/  (Main Git Repository)
│
├── .git/                          # Git configuration folder
├── .gitignore                     # Git ignore rules
│
└── battleship_oct/                # Project folder
    ├── .babelrc                   # Babel configuration for ES6
    ├── package.json               # Node.js dependencies
    ├── package-lock.json          # Locked dependency versions
    │
    ├── README.md                  # Project overview
    ├── FINAL_CHECKLIST.md         # Final checklist
    ├── GITHUB_SETUP.md            # GitHub setup instructions
    ├── PROJECT_SUMMARY.md         # Project summary
    ├── QUICK_REFERENCE.md         # Quick reference guide
    │
    ├── node_modules/              # Installed npm packages (don't commit)
    │
    └── src/                       # Source code folder
        ├── index.html             # Main HTML file (entry point)
        ├── index.js               # Main JavaScript file (imports other modules)
        ├── style.css              # Global styles
        │
        ├── ship.js                # Ship class definition
        ├── gameboard.js           # Gameboard class definition
        ├── player.js              # Player class definition
        ├── dom.js                 # DOM manipulation functions
        │
        ├── ship.test.js           # Ship unit tests
        ├── gameboard.test.js      # Gameboard unit tests
        ├── player.test.js         # Player unit tests
        │
        └── __tests__/             # Additional tests folder
            └── dom.extra.test.js  # Extra DOM tests
```

---

## 🔗 File Path Reference

| File | Type | Purpose |
|------|------|---------|
| `src/index.html` | HTML | Main entry point for the browser |
| `src/index.js` | JavaScript | Main app logic, imports all modules |
| `src/style.css` | CSS | Global styling |
| `src/ship.js` | Module | Ship class |
| `src/gameboard.js` | Module | Gameboard class |
| `src/player.js` | Module | Player class |
| `src/dom.js` | Module | DOM helpers & UI functions |

---

## 📋 Import Statements (All Correct)

All imports in your project use **relative paths** and are already correct:

### `src/index.js`
```javascript
import Gameboard from './gameboard.js';
import Ship from './ship.js';
import { generateGrid, renderBoard, enableEnemyClicks, computerTurn, checkGameOver } from './dom.js';
import { pickRandomLegalMove } from './dom.js';
```

### `src/player.js`
```javascript
import Gameboard from './gameboard.js';
```

### `src/index.html`
```html
<link rel="stylesheet" href="./style.css">
<script src="./index.js" type="module"></script>
```

---

## 🚀 Running Your Project

### Option 1: Local Development (Recommended)
```bash
cd /path/to/SHipS_Battle/battleship_oct
npm install
npm test          # Run tests with Jest
```

### Option 2: Open in Browser
Simply open `src/index.html` in your browser:
- Right-click on `src/index.html`
- Select "Open with Live Server" (if you have the extension)
- Or use a local HTTP server

---

## 📤 GitHub Upload Checklist

Before pushing to GitHub, ensure:

- ✅ `.gitignore` includes `node_modules/`
- ✅ All relative paths use `./` format
- ✅ HTML script tag: `<script src="./index.js" type="module"></script>`
- ✅ All imports use relative paths (e.g., `import Ship from './ship.js';`)
- ✅ No absolute paths in code
- ✅ `.babelrc` is configured correctly

---

## 🔍 Important Notes

1. **Module Imports**: Your project uses ES6 modules (`import/export`), which is correct for modern JavaScript
2. **Relative Paths**: All paths are relative (`./filename.js`), which works everywhere
3. **HTML Scripts**: The `index.html` loads `index.js` with `type="module"` - this is correct
4. **Tests**: Jest is configured to run tests from `**/*.test.js` files
5. **Git Ready**: Your project structure is now clean and ready for GitHub

---

## 📌 Quick Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run a specific test file
npm test -- ship.test.js
```

---

## ✅ Your Project is Ready!

All file paths and imports are already correct. You can confidently push this to GitHub! 🎉

For more details, see `GITHUB_SETUP.md` and `QUICK_REFERENCE.md` in the project root.
