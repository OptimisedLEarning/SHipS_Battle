# 🎮 Make Your Game Playable Online - Super Simple Way

## The Problem
Your `index.html` is in `src/` folder. GitHub Pages needs it at the root.

## The Solution (Just 3 Steps)

### Step 1: Copy Files to Root
```bash
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct
cp src/index.html .
cp src/style.css .
cp src/index.js .
cp src/gameboard.js .
cp src/game.js .
cp src/ship.js .
cp src/player.js .
cp src/dom.js .
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Add files to root for GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to: `https://github.com/YOUR_USERNAME/SHipS_Battle`
2. Click **Settings** (top right)
3. Click **Pages** (left menu)
4. Select Branch: **main**
5. Select Folder: **/ (root)**
6. Click **Save**
7. Wait 2-3 minutes

## ✅ Done!

Your game is now live at:
```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**Example:**
```
https://john-smith.github.io/SHipS_Battle/
```

---

## That's It!

- ✅ Your game is online
- ✅ Anyone can play it
- ✅ No installation needed
- ✅ Works on any device
- ✅ Free forever

Share the link with friends! 🎉
