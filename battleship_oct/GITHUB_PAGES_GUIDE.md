# 🌐 How to Host Your Battleship Game on GitHub Pages

## 🎯 The Challenge
Your `index.html` is inside the `src/` folder, but GitHub Pages by default looks for `index.html` in the root folder. Let me show you **3 solutions** - pick the one that works best for you!

---

## ✨ Solution 1: GitHub Pages with Custom Subdirectory (Easiest) ⭐

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/SHipS_Battle`
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **main** branch
5. Select folder: **`/src`** (NOT root)
6. Click **Save**

### Step 2: Get Your Live Link
GitHub will generate a link like:
```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

### Step 3: Done! ✅
Your game is now live! Share this link anywhere.

**Pros:**
- ✅ Easiest method
- ✅ One click setup
- ✅ Automatically deploys from your repo

**Cons:**
- ⚠️ Only works if you rename `/src` to root folder OR use GitHub Actions

---

## 🔥 Solution 2: Move `index.html` to Root (Simplest & Most Common)

This is what professional projects do!

### Step 1: Reorganize Your Files

**Option A: Keep src folder, create copies in root**
```
SHipS_Battle/battleship_oct/
├── index.html ..................... (NEW - copy from src/)
├── style.css ..................... (NEW - copy from src/)
├── package.json
├── .babelrc
└── src/
    ├── index.html ............... (keep original for reference)
    ├── style.css ................ (keep original for reference)
    ├── index.js
    ├── game.js
    └── ... (rest of files)
```

**Option B: Move everything to root (recommended)**
```
SHipS_Battle/battleship_oct/
├── index.html ..................... (MOVED HERE)
├── style.css ..................... (MOVED HERE)
├── index.js ...................... (MOVED HERE)
├── game.js ....................... (MOVED HERE)
├── gameboard.js .................. (MOVED HERE)
├── player.js ..................... (MOVED HERE)
├── ship.js ....................... (MOVED HERE)
├── dom.js ........................ (MOVED HERE)
├── package.json
├── .babelrc
├── *.test.js ..................... (Tests in root)
└── __tests__/ .................... (Extra tests)
```

### Step 2: Update Imports (If Using Option A)

If you keep the `src/` folder, update the script tag in root `index.html`:

**`index.html` (at root level)**
```html
<link rel="stylesheet" href="./style.css">
<script src="./index.js" type="module"></script>
```

**`index.js` (at root level) - UPDATE IMPORTS TO USE `./`**
```javascript
import Gameboard from './gameboard.js';
import Ship from './ship.js';
import { generateGrid, renderBoard, enableEnemyClicks, computerTurn, checkGameOver } from './dom.js';
```

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Select **main** branch
3. Select folder: **`/ (root)`**
4. Click **Save**

### Step 4: Your Link
```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

**Pros:**
- ✅ Standard web project structure
- ✅ Works perfectly with GitHub Pages
- ✅ Professional looking
- ✅ Easy to deploy

**Cons:**
- ⚠️ Requires file reorganization

---

## 🤖 Solution 3: GitHub Actions (Advanced but Most Powerful)

Use a build script to automatically organize files for GitHub Pages.

### Step 1: Create GitHub Actions Workflow

Create this file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Copy files to root for GitHub Pages
        run: |
          cp src/index.html index.html
          cp src/style.css style.css
          cp src/index.js index.js
          cp src/game.js game.js
          cp src/gameboard.js gameboard.js
          cp src/player.js player.js
          cp src/ship.js ship.js
          cp src/dom.js dom.js
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Step 2: Push to GitHub
```bash
git add .github/
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Select **main** branch
3. Click **Save**

GitHub Actions will automatically deploy your files!

**Pros:**
- ✅ Keeps `src/` folder organized
- ✅ Runs tests before deploying
- ✅ Fully automated
- ✅ Professional setup

**Cons:**
- ⚠️ More complex to understand
- ⚠️ Requires GitHub Actions knowledge

---

## 📊 Comparison Table

| Solution | Difficulty | Setup Time | Live Link | Auto-Deploy |
|----------|-----------|-----------|-----------|------------|
| **Solution 1** (src folder) | ⭐ Easy | 2 min | ✅ Yes | ✅ Yes |
| **Solution 2** (Root folder) | ⭐ Easy | 5 min | ✅ Yes | ✅ Yes |
| **Solution 3** (GitHub Actions) | ⭐⭐⭐ Hard | 10 min | ✅ Yes | ✅ Yes |

---

## 🎯 My Recommendation

**Use Solution 2 (Root Folder)** - Here's why:
- ✅ Most common web project structure
- ✅ Works perfectly with GitHub Pages
- ✅ Simple to understand
- ✅ Professional standard
- ✅ No complicated setup

---

## 📝 Step-by-Step: Solution 2 (Recommended)

### Step 1: Copy Files to Root
```bash
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct

# Copy main files to root
cp src/index.html .
cp src/style.css .
cp src/index.js .
cp src/game.js .
cp src/gameboard.js .
cp src/player.js .
cp src/ship.js .
cp src/dom.js .

# Copy test files (optional, but good practice)
cp src/*.test.js .
```

### Step 2: Update Imports in Root `index.js`
The imports should already be correct (they use `./`), but verify:

```javascript
import Gameboard from './gameboard.js';
import Ship from './ship.js';
import { generateGrid, renderBoard, enableEnemyClicks, computerTurn, checkGameOver } from './dom.js';
```

### Step 3: Test Locally
```bash
# Open index.html in browser
# Right-click → "Open with Live Server"
```

### Step 4: Commit and Push
```bash
git add .
git commit -m "Add files to root for GitHub Pages deployment"
git push origin main
```

### Step 5: Enable GitHub Pages
1. Go to `https://github.com/YOUR_USERNAME/SHipS_Battle`
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 6: Get Your Live Link
GitHub will show you: `https://YOUR_USERNAME.github.io/SHipS_Battle/`

Wait 2-3 minutes, then click the link. Your game is live! 🎉

---

## 🔗 Your Final Link Will Be

```
https://YOUR_USERNAME.github.io/SHipS_Battle/
```

**Example:**
```
https://john-doe.github.io/SHipS_Battle/
```

---

## ⚡ Troubleshooting

### "My page shows 404"
- Wait 2-3 minutes for GitHub Pages to build
- Check that `index.html` is in the root folder
- Verify GitHub Pages is enabled in Settings

### "Scripts not loading"
- Make sure all `.js` files are in the root folder
- Check that imports use `./filename.js` format
- Open browser console (F12) to see errors

### "CSS not loading"
- Make sure `style.css` is in root folder
- Check `<link>` tag in HTML: `<link rel="stylesheet" href="./style.css">`

### "Images not showing"
- Move image files to root or create `/images/` folder
- Update image paths accordingly

---

## 📱 Share Your Game!

Once live, you can share:
```
🎮 Play my Battleship game: https://YOUR_USERNAME.github.io/SHipS_Battle/
```

---

## 🎓 Summary

| Step | Action |
|------|--------|
| 1️⃣ | Copy HTML, CSS, JS to root folder |
| 2️⃣ | Verify imports use `./` format |
| 3️⃣ | Push to GitHub |
| 4️⃣ | Enable GitHub Pages (Settings → Pages) |
| 5️⃣ | Wait 2-3 minutes |
| 6️⃣ | Visit your live link! 🚀 |

---

## 💡 Pro Tips

- **Keep `src/` folder**: You can keep the original `src/` folder for organization
- **Auto-deploy**: Every time you push, GitHub Pages updates automatically
- **Custom domain**: Want a custom domain? GitHub Pages supports it!
- **Free hosting**: No cost, no limits (for public repos)

---

## 🌟 After This Works

Once your game is live:
- ✅ Share the link on GitHub's repo description
- ✅ Add it to your portfolio
- ✅ Share on social media
- ✅ Send to friends to play! 🎮

---

**Need help?** Let me know which solution you choose, and I'll help you set it up! 🚀
