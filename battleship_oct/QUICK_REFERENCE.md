# Quick Reference - Battleship Project

## Project Complete ✅

You've built a fully functional Battleship game with:
- ✅ Models (Ship, Gameboard, Player) — fully tested
- ✅ UI (HTML, CSS, JavaScript) — separated and clean
- ✅ Gameplay (placement, attacks, AI, win detection)
- ✅ Polish (animations, sounds, confetti)

---

## File Map (What Goes Where)

```
GAME LOGIC (Models)
↓
ship.js          → Length, hits, isSunk()
gameboard.js     → Grid, placement, attacks, game over
player.js        → Name + board wrapper
↓
ORCHESTRATION (Controller)
↓
index.js         → Game loop, placement flow, wiring models
↓
UI HELPERS
↓
dom.js           → Rendering, click handlers, AI moves
↓
PRESENTATION (View)
↓
index.html       → Structure
style.css        → Styles
```

---

## Core Mechanics (Pseudocode)

### Ship
```
new Ship(length)
  .hit()          → increments hits
  .isSunk()       → returns hits >= length
```

### Gameboard
```
new Gameboard()
  .placeShip(ship, {x,y}, direction)
    → writes ship to grid cells
  .receiveAttack({x,y})
    → if already attacked: return null
    → if ship here: ship.hit(); return 'hit'
    → else: return 'miss'
  .allShipsSunk()
    → return ships.every(s => s.isSunk())
```

### Game Flow
```
1. Create boards and ships
2. Auto-place enemy ships
3. Player places ships (manual or auto)
4. LOOP:
     Player attacks enemy board
     → if all enemy ships sunk: YOU WIN
     Computer attacks player board
     → if all player ships sunk: YOU LOSE
```

---

## GitHub Push (3 Commands)

### First Time
```bash
git init
git remote add origin https://github.com/YOUR-USERNAME/battleship.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Future Changes
```bash
git add .
git commit -m "your message"
git push
```

---

## Testing

```bash
npm test
```

**Expected**: 4 test suites, 10 tests passed ✅

---

## CSS Organization

Moved from `index.html` to `style.css`:
- ✅ Global reset & layout
- ✅ Grid & cells
- ✅ Animations (preview, hit, miss, particles, confetti)
- ✅ Overlay & buttons
- ✅ UI elements

HTML is now **clean and readable**!

---

## Key Concepts You Used

### Separation of Concerns
- Models (game rules)
- View (rendering)
- Controller (orchestration)

### Pure Functions
- `canPlace()` — no side effects
- `receiveAttack()` — returns result, doesn't modify UI

### Event Delegation
- One listener on `.grid`; handles all cell clicks via `e.target`

### Callbacks
- UI callbacks pass results to game logic
- Game logic calls UI callbacks to render updates

### Test-Driven Development
- Models tested before UI
- Public APIs have tests
- UI tested manually (not unit tested)

---

## Common Patterns You Learned

### Query Selector
```javascript
const el = document.querySelector('[data-board="player"]');
```

### Event Listener
```javascript
element.addEventListener('click', (e) => {
  const result = model.action(e.target.data);
  if (result) render(model);
});
```

### Module Export/Import
```javascript
// Export
export function myFunction() { }

// Import
import { myFunction } from './file.js';
```

### Array Methods
```javascript
ships.every(s => s.isSunk())        // all sunk?
ships.forEach(s => placeShip(s))    // place each
board.some(cell => cell.occupied)   // any occupied?
```

---

## Documentation Files Created

1. **README.md** — Project overview, features, how to play
2. **GITHUB_SETUP.md** — Step-by-step GitHub guide
3. **PROJECT_SUMMARY.md** — Architecture & learning notes
4. **QUICK_REFERENCE.md** — This file!

---

## Before You Push to GitHub

```bash
# 1. Tests pass
npm test

# 2. No console errors (F12)
# Open browser with Live Server and check console

# 3. .gitignore exists (or create it)
echo "node_modules/" > .gitignore

# 4. Git initialized
git status

# 5. GitHub repo created
# Copy URL from GitHub

# 6. Ready to push
git add .
git commit -m "Initial commit: Complete Battleship game"
git branch -M main
git push -u origin main
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Not a git repository" | `git init` |
| "Failed to connect" | Check GitHub URL |
| "Permission denied" | Use SSH key or access token |
| "Updates rejected" | `git pull origin main --rebase` then `git push` |
| CSS not loading | Check `<link>` path in HTML (should be `./style.css`) |
| Tests failing | `npm test` to see details; check model implementations |

---

## What Makes Your Project Professional

✅ **Testable models** — Game logic separated from UI
✅ **Clean architecture** — Each file has one job
✅ **Good naming** — Functions are self-documenting
✅ **Separated concerns** — CSS, HTML, JS in different files
✅ **Documentation** — README, comments, setup guide
✅ **Version control** — On GitHub with clear history
✅ **Animations & UX** — Polish that feels complete

---

## You Did It! 🎉

This is a **real, working project** that:
- Runs without errors
- Has passing tests
- Looks good
- Is easy to understand
- Is on GitHub

**This is exactly what junior developers should build.**

Next step: Share it! 🚀

---

**Need help? Re-read:**
1. `README.md` — Features & how to play
2. `GITHUB_SETUP.md` — GitHub push steps
3. `PROJECT_SUMMARY.md` — Architecture & learning

Good luck! 💪
