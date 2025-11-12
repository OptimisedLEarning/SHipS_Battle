# 🚀 GitHub Pages - Quick Start (30 seconds)

## The Fastest Way to Get Your Game Online

### Your Current Setup
```
battleship_oct/
└── src/
    └── index.html  ← GitHub Pages can't see this here!
```

### After GitHub Pages Setup
```
battleship_oct/
├── index.html     ← GitHub Pages finds it here! ✅
├── style.css      ← All files in ROOT
├── index.js
├── game.js
├── gameboard.js
├── player.js
├── ship.js
├── dom.js
└── src/ (optional - can keep for reference)
    └── (original files)
```

---

## 🎯 3-Step Solution

### Step 1: Move Files to Root (2 minutes)
```bash
# Navigate to your project
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct

# Copy all files from src/ to root
cp src/index.html .
cp src/style.css .
cp src/index.js .
cp src/gameboard.js .
cp src/game.js .
cp src/ship.js .
cp src/player.js .
cp src/dom.js .
```

### Step 2: Push to GitHub (1 minute)
```bash
git add .
git commit -m "Add files to root for GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages (1 minute)
1. Go to: `https://github.com/YOUR_USERNAME/SHipS_Battle`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Select Branch: **main**
5. Select Folder: **/ (root)**
6. Click **Save**

---

## ✅ Your Live Link

After 2-3 minutes, your game will be live at:

```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

---

## 📸 GitHub Pages Settings (Visual Guide)

```
Settings Tab
└── Pages (left sidebar)
    ├── Source
    │   ├── Branch: main ← Select this
    │   └── Folder: / (root) ← Select this
    │
    └── Custom domain (optional)
        └── yourname.com (if you have a domain)
```

---

## 🎮 Done!

Your Battleship game is now online and ready to share!

**Share this link:**
```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

---

## ❓ What Files Do I Need in Root?

**Must have:**
- ✅ `index.html` - Main HTML file
- ✅ `style.css` - Styling
- ✅ `index.js` - Main JavaScript
- ✅ All imported files: `gameboard.js`, `ship.js`, `player.js`, `dom.js`, etc.

**Optional:**
- 📁 `src/` - Can keep for organization
- 📁 `__tests__/` - Tests (won't affect website)

---

## 🔗 Import Paths (Already Correct!)

All your imports already use `./` format:

```javascript
import Gameboard from './gameboard.js';  ✅ Works in root!
import Ship from './ship.js';             ✅ Works in root!
import { ... } from './dom.js';          ✅ Works in root!
```

No changes needed! 🎉

---

## 🌟 Tips

- **Auto-deploys**: Every `git push` updates your live site automatically
- **Free hosting**: No cost, ever (for public repos)
- **Custom domain**: Can use your own domain (optional)
- **Fast**: Your game loads instantly from GitHub's servers

---

## 📝 Before & After

**BEFORE (files in src/):**
```
https://github.com/YOUR_USERNAME/SHipS_Battle/
├── battleship_oct/
│   └── src/
│       └── index.html
```
❌ GitHub Pages can't find it

**AFTER (files in root):**
```
https://github.com/YOUR_USERNAME/SHipS_Battle/
├── battleship_oct/
│   ├── index.html
│   └── ...
```
✅ GitHub Pages finds it → Live at: `https://YOUR_USERNAME.github.io/SHipS_Battle/`

---

## 🚀 You're Ready!

1. Copy files to root ✅
2. Push to GitHub ✅
3. Enable GitHub Pages ✅
4. Wait 2-3 minutes ✅
5. Share your link! 🎉

**That's it! Your game is live!** 🌐

---

For detailed instructions, see `GITHUB_PAGES_GUIDE.md`
