# 💻 Copy-Paste Commands for GitHub Pages Setup

## 🎯 Just Copy & Paste These Commands

### Command 1: Navigate to Your Project
```bash
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct
```

### Command 2: Copy All Files to Root
```bash
cp src/index.html . && \
cp src/style.css . && \
cp src/index.js . && \
cp src/gameboard.js . && \
cp src/game.js . && \
cp src/ship.js . && \
cp src/player.js . && \
cp src/dom.js .
```

### Command 3: Verify Files Are Copied
```bash
ls -la *.html *.css *.js
```

You should see:
```
-rw-r--r-- 1 user staff   index.html
-rw-r--r-- 1 user staff   style.css
-rw-r--r-- 1 user staff   index.js
-rw-r--r-- 1 user staff   gameboard.js
-rw-r--r-- 1 user staff   game.js
-rw-r--r-- 1 user staff   ship.js
-rw-r--r-- 1 user staff   player.js
-rw-r--r-- 1 user staff   dom.js
```

### Command 4: Check Git Status
```bash
git status
```

### Command 5: Commit Changes
```bash
git add .
git commit -m "Move files to root for GitHub Pages deployment"
```

### Command 6: Push to GitHub
```bash
git push origin main
```

---

## ✅ Now Do This in GitHub (Web Browser)

1. **Go to your repo**: 
   - `https://github.com/YOUR_USERNAME/SHipS_Battle`

2. **Click Settings** (top right, next to "Code" button)

3. **Click Pages** (left sidebar)
   
4. **Under "Source"**:
   - Branch: Select **main**
   - Folder: Select **/ (root)**
   
5. **Click Save**

6. **Wait 2-3 minutes**

7. **Your link will appear**:
   ```
   https://YOUR_USERNAME.github.io/SHipS_Battle/
   ```

---

## 📋 Checklist

After following these steps:

- ✅ Files copied to root
- ✅ Changes committed to git
- ✅ Pushed to GitHub
- ✅ GitHub Pages enabled
- ✅ Waited 2-3 minutes
- ✅ Visited your live link

---

## 🎮 Your Live Game

Visit: `https://YOUR_USERNAME.github.io/SHipS_Battle/`

Replace `YOUR_USERNAME` with your actual GitHub username!

**Example:**
- If your username is `john-smith`
- Your link is: `https://john-smith.github.io/SHipS_Battle/`

---

## 🔍 Verify It's Working

1. **Check GitHub Pages status**: 
   - Go to Settings → Pages
   - Should show green checkmark with link

2. **Click the link**:
   - Should open your Battleship game
   - Can click cells and play

3. **Check browser console** (F12):
   - Should have no errors
   - Game should load and play

---

## ❌ If It Doesn't Work

### Problem: Shows 404 Error
**Solution:**
```bash
# Make sure files are in root, not in src/
ls -la index.html     # Should exist

# Check git was pushed
git log --oneline     # Should show your commit
```

### Problem: Page loads but game doesn't work
**Solution:**
1. Open browser console: Press **F12**
2. Look for error messages
3. Usually means imports are broken
4. Verify all `.js` files are in root folder

### Problem: GitHub Pages not enabled
**Solution:**
1. Go to Settings → Pages
2. Make sure "Source" shows: Branch **main**, Folder **/ (root)**
3. Click Save again

---

## 📝 Full Workflow (All Commands)

```bash
# 1. Navigate to project
cd /mnt/d/Odin/battleship/SHipS_Battle/battleship_oct

# 2. Copy files to root
cp src/index.html . && cp src/style.css . && cp src/index.js . && \
cp src/gameboard.js . && cp src/game.js . && cp src/ship.js . && \
cp src/player.js . && cp src/dom.js .

# 3. Check files
ls -la *.html *.css *.js

# 4. Check git status
git status

# 5. Add and commit
git add .
git commit -m "Move files to root for GitHub Pages"

# 6. Push to GitHub
git push origin main

# 7. Now go to GitHub website and enable Pages
# (See steps above in browser)
```

---

## 🌟 Success!

After 2-3 minutes:

✅ Your game is live  
✅ You can share the link  
✅ Anyone can play it  
✅ It auto-updates when you push  

**Congratulations! 🎉**

---

## 💡 Pro Tip

Create a file called `DEPLOYMENT_NOTES.md` to track what you did:

```markdown
# Deployment Notes

## GitHub Pages Setup
- Moved all files from src/ to root on [DATE]
- Enabled GitHub Pages pointing to root folder
- Live at: https://YOUR_USERNAME.github.io/SHipS_Battle/
```

Then commit it:
```bash
git add DEPLOYMENT_NOTES.md
git commit -m "Add deployment notes"
git push origin main
```

---

## 📞 Need Help?

Check these files:
- `GITHUB_PAGES_GUIDE.md` - Detailed guide with 3 solutions
- `GITHUB_PAGES_QUICK_START.md` - Visual quick start
- `FOLDER_STRUCTURE.md` - File organization
- `REFERENCE_CARD.md` - Quick reference

**You've got this!** 🚀
