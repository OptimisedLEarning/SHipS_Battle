# How to Push Your Battleship Project to GitHub

## Step-by-Step Guide (Very Simple)

### Step 1: Create a GitHub Account (if you don't have one)
- Go to https://github.com
- Click **Sign up**
- Fill in your email, password, username
- Verify your email
- Done!

### Step 2: Create a New Repository on GitHub
1. Log in to GitHub
2. Click the **+** icon (top-right corner) → **New repository**
3. Fill in the form:
   - **Repository name**: `battleship` (or any name you like)
   - **Description**: `A Battleship game built with vanilla JavaScript`
   - **Public** or **Private** (choose based on preference)
   - Check **Add a README file** (optional, but recommended)
   - Click **Create repository**
4. Copy the repository URL (looks like: `https://github.com/YOUR-USERNAME/battleship.git`)

### Step 3: Initialize Git in Your Local Project (First Time Only)
Open your terminal and navigate to your project folder:

```bash
cd /mnt/d/Odin/battleship/battleship_oct
```

Initialize git:

```bash
git init
```

Add the remote repository (replace with your actual URL):

```bash
git remote add origin https://github.com/YOUR-USERNAME/battleship.git
```

Verify the remote was added:

```bash
git remote -v
```

You should see:
```
origin  https://github.com/YOUR-USERNAME/battleship.git (fetch)
origin  https://github.com/YOUR-USERNAME/battleship.git (push)
```

### Step 4: Add Your Files to Git
Stage all files:

```bash
git add .
```

Check what will be committed:

```bash
git status
```

You should see all your files in green (staged).

### Step 5: Create Your First Commit
A commit is a snapshot of your code. Include a message:

```bash
git commit -m "Initial commit: add battleship game with placement, gameplay, animations"
```

Good commit messages are short and describe what changed.

### Step 6: Push to GitHub
Push your local commits to GitHub:

```bash
git branch -M main
git push -u origin main
```

This:
- Renames your branch to `main` (GitHub default)
- Pushes your code to GitHub
- Sets `origin main` as the default upstream branch for future pushes

**Wait for it to complete** — you may be prompted to log in or authenticate.

### Step 7: Verify on GitHub
1. Go to your GitHub repository URL (e.g., `https://github.com/YOUR-USERNAME/battleship`)
2. You should see all your files listed!
3. Click on any file to view its contents.

---

## Future Commits (After First Push)

Every time you make changes:

```bash
git add .
git commit -m "Brief description of what changed"
git push
```

That's it!

---

## Useful Git Commands

### Check your status
```bash
git status
```

### See commit history
```bash
git log
```

### Undo changes to a file (before committing)
```bash
git checkout src/index.js
```

### Remove a file from staging
```bash
git reset src/index.js
```

### Create a `.gitignore` file (to exclude certain files)
```bash
# Create a .gitignore file in your project root
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
```

Then commit it:
```bash
git add .gitignore
git commit -m "Add .gitignore"
git push
```

---

## Troubleshooting

### Error: "fatal: not a git repository"
You haven't run `git init` in this folder. Do:
```bash
git init
```

### Error: "Permission denied" or "fatal: could not read Username"
You need to authenticate. Use one of these methods:

**Option A: SSH (Recommended)**
- Generate SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-gpg-key
- Add to GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
- Use SSH URL instead: `git@github.com:YOUR-USERNAME/battleship.git`

**Option B: Personal Access Token (Easier)**
- Go to GitHub → Settings → Developer settings → Personal access tokens
- Click "Generate new token"
- Select `repo` scope
- Copy the token
- Use it as your password when pushing

### Error: "updates were rejected because the remote contains work that you do not have locally"
Pull first:
```bash
git pull origin main --rebase
git push
```

---

## What Should Be in Your Repository?

✅ **Include:**
- `src/` (all your source files)
- `package.json`
- `.gitignore`
- `README.md` (project description)

❌ **Exclude (add to `.gitignore`):**
- `node_modules/` (too big; `npm install` will recreate it)
- `.DS_Store` (Mac system files)
- `*.log` (log files)
- `.env` (sensitive data, if you use it later)

---

## Create a Nice README.md

Replace or create `README.md` in your project root:

```markdown
# Battleship Game

A classic Battleship game built with vanilla JavaScript, HTML, and CSS.

## Features
- Manual and automatic ship placement
- Turn-based gameplay vs computer AI
- Hit/miss animations and sound effects
- Victory overlay with confetti
- Fully tested model layer (Jest)

## How to Play
1. Click **Start** to begin
2. Place your ships by clicking and rotating (R key)
3. Or click **Auto-place My Ships** for random placement
4. Once placed, click enemy board cells to attack
5. Computer will reply; first to sink all ships wins!

## Installation

```bash
npm install
npm test      # Run unit tests
npm start     # Start with Live Server (or use VSCode Live Server)
```

## Project Structure
- `src/ship.js` - Ship model
- `src/gameboard.js` - Game board and attack logic
- `src/player.js` - Player model
- `src/dom.js` - UI helpers (rendering, click handlers)
- `src/index.js` - Game controller and app wiring
- `src/index.html` - HTML structure
- `src/style.css` - Styles

## Testing
All models are unit-tested:

```bash
npm test
```

## Technologies
- Vanilla JavaScript (ES6 modules)
- Jest (testing)
- HTML5 & CSS3
- Web Audio API (for beeps)

## Future Improvements
- Mute button for sounds
- Difficulty levels for AI
- Multiplayer (two-player local)
- Responsive design for mobile

## Author
Your Name - https://github.com/YOUR-USERNAME

## License
MIT
```

---

## Summary

You've now:
1. ✅ Created a GitHub repository
2. ✅ Initialized git locally
3. ✅ Pushed your code to GitHub
4. ✅ Created a nice README

**Next time you code:**
```bash
git add .
git commit -m "your message"
git push
```

Congratulations — your project is now on GitHub! 🎉
