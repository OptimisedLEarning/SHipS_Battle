# 🎮 BATTLESHIP: GITHUB PAGES QUICK REFERENCE

## THE PROBLEM YOU HAD

**Local (VS Code):** ✅ Works fine
**GitHub Pages:** ❌ 404 Error - Files not found

**Why?** GitHub Pages looks for `index.html` in the **ROOT** folder, not inside `src/`

---

## THE SOLUTION (ALREADY DONE FOR YOU! ✅)

Your game files have been organized correctly:

```
ROOT LEVEL (GitHub Pages can see these):
✅ index.html
✅ style.css
✅ index.js
✅ gameboard.js
✅ ship.js
✅ player.js
✅ dom.js

OPTIONAL (for organization):
📁 src/ (original files - not needed for GitHub Pages)
```

---

## DEPLOY IN 3 STEPS

### 1️⃣ **Push to GitHub**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 2️⃣ **Enable GitHub Pages**
- Go to **Settings** → **Pages**
- Select **Branch: main** and **Folder: / (root)**
- Click **Save**

### 3️⃣ **Wait & Visit**
- Wait 2-3 minutes
- Visit: `https://OptimisedLEarning.github.io/SHipS_Battle/`

---

## DO I NEED THE `src/` FOLDER?

**For GitHub Pages:** ❌ NO - Keep files at ROOT

**Keep `src/` if:**
- You want organized source code
- You plan to use build tools later

**Delete `src/` if:**
- You want a simpler repository

---

## QUICK CHECKLIST

- [ ] All `.js` and `.css` files are in ROOT (not in subfolder)
- [ ] `index.html` is in ROOT
- [ ] All file references in HTML use `./filename` format
- [ ] All imports in JavaScript use `./filename.js` format
- [ ] Git changes are committed and pushed
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] 2-3 minutes have passed since enabling Pages

---

## IF IT DOESN'T WORK

1. **Check console errors:** Press `F12` in browser → Console tab
2. **Verify file paths:** Search for absolute paths like `/style.css` and change to `./style.css`
3. **Hard refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. **Check GitHub Pages settings:** Make sure it's set to `main` branch, `/ (root)` folder

---

## YOUR GAME IS READY! 🚀

Everything is set up correctly. Just push to GitHub and enable Pages!
