# 🎬 GitHub Pages - Super Quick Start

## Your Question: "How do I show my HTML game on GitHub as a free website?"

## 🎯 Answer in 30 Seconds

Your `index.html` is in `src/` folder. GitHub Pages needs it at the root.

### Solution: Move files to root, enable GitHub Pages

**Result:** Live link like `https://YOUR_USERNAME.github.io/SHipS_Battle/`

---

## ⚡ 5-Minute Setup

### 1. Copy Files (Terminal)
```bash
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct
cp src/index.html . && cp src/style.css . && cp src/index.js . && cp src/gameboard.js . && cp src/game.js . && cp src/ship.js . && cp src/player.js . && cp src/dom.js .
```

### 2. Push to GitHub (Terminal)
```bash
git add .
git commit -m "Add files to root for GitHub Pages"
git push origin main
```

### 3. Enable GitHub Pages (Browser - 2 minutes)
1. Go to: `https://github.com/YOUR_USERNAME/SHipS_Battle`
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Select Branch: **main**
5. Select Folder: **/ (root)**
6. Click **Save**

### 4. Wait (2-3 minutes)

### 5. Visit Your Link ✅
```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

---

## 📊 Before & After

```
BEFORE                          AFTER
├── src/                         ├── index.html ✅
│   └── index.html              ├── style.css ✅
│   └── *.js                    ├── *.js ✅
└── (GitHub can't find it ❌)   └── (GitHub finds it ✅)

No live link ❌                  Live link ✅
```

---

## 🎮 That's It!

Your game is now online, playable, and shareable! 🌍

---

## 📚 Need More Help?

- **Want just commands?** → `COPY_PASTE_COMMANDS.md`
- **Want visual steps?** → `GITHUB_PAGES_QUICK_START.md`
- **Want detailed guide?** → `GITHUB_PAGES_GUIDE.md`
- **Want everything?** → `GITHUB_PAGES_ALL_IN_ONE.md`
- **Want file list?** → `DOCUMENTATION_INDEX.md`

---

## ✨ Why This Works

1. **Files in root** → GitHub Pages finds them ✅
2. **Imports use `./`** → Work anywhere ✅
3. **GitHub Pages** → Free hosting ✅
4. **Auto-deploy** → Pushes update site ✅

---

## 🎉 Your Live Game

Replace `YOUR_USERNAME` with your actual username:

```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

**Example:**
```
https://john-smith.github.io/SHipS_Battle/
```

---

**You're all set!** 🚀

Now go through these 3 steps above, and your game will be online in 5 minutes!
