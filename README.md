# Committee Meeting Schedule — Berea College Academic Affairs

A weekly visual schedule of standing committee meetings, built to run entirely on GitHub Pages with no server, database, or coding required to update it each semester.

## What's in this repo

- **`index.html`** — the public schedule page people visit. It reads its content from `committees-data.js` and draws the weekly grid automatically.
- **`committees-data.js`** — the one file an admin edits each semester. It lists every committee's day, time, frequency, and color, with plain-English instructions written directly in the file.
- **`admin.html`** — an easier, point-and-click alternative to editing `committees-data.js` by hand. Open it in any browser, use dropdowns and time pickers to make changes, preview the result, then copy/paste the generated text into `committees-data.js` on GitHub.

## Putting this on GitHub Pages — full walkthrough

No build step, no dependencies to install, nothing to run locally. The only requirement is an internet connection (the page loads its fonts from Google Fonts' CDN).

### 1. Get a GitHub account (skip if you already have one)
Go to [github.com](https://github.com), click **Sign up**, and follow the prompts. Free accounts are all you need for this.

### 2. Create a new repository
- Click the **+** icon in the top-right corner of any GitHub page → **New repository**.
- Give it a name, e.g. `committee-schedule`.
- Leave it **Public** (GitHub Pages on a free account requires the repo to be public — nothing sensitive lives in these files, just meeting times).
- Check the box for **"Add a README file"** — you'll overwrite it with the one in this download in the next step.
- Click **Create repository**.

### 3. Upload the four files
- On your new repo's main page, click **Add file → Upload files**.
- Drag in `index.html`, `admin.html`, `committees-data.js`, and `README.md` (say yes to overwriting the placeholder README).
- Scroll down and click **Commit changes**.

### 4. Turn on GitHub Pages
- In the repo, click **Settings** (top menu bar of the repo, not your account settings).
- In the left sidebar, click **Pages**.
- Under "Build and deployment" → "Source," choose **Deploy from a branch**.
- Under "Branch," choose **main** and folder **/ (root)**, then click **Save**.

### 5. Find your live link
- Give it a minute or two, then refresh that same Settings → Pages screen.
- A message near the top will say **"Your site is live at..."** followed by a link that looks like `https://<your-username>.github.io/committee-schedule/`.
- Open that link — you should see the schedule. Bookmark it and share it with whoever needs it.
- The admin tool lives at the same address with `/admin.html` added on the end, e.g. `https://<your-username>.github.io/committee-schedule/admin.html`.

### If something looks off
- **Page shows a 404 / "There isn't a GitHub Pages site here"**: you likely just need to wait another minute, or double check Settings → Pages shows "main" and "/ (root)" as selected.
- **Page loads but looks unstyled/broken**: make sure all four files were uploaded to the *root* of the repo (not inside a subfolder).
- **You made a change but the live page looks the same**: GitHub Pages can take a minute or two to rebuild after a commit, and your browser may be showing a cached copy — try a hard refresh (Ctrl/Cmd+Shift+R).

## Updating the schedule each semester

**Easiest way:** open `admin.html` (double-click the file, or visit it on the live site at `/admin.html`), make your changes with the dropdowns and time pickers, click "Generate updated file," then "Copy to clipboard." On GitHub, open `committees-data.js`, click the pencil/edit icon, select all the existing text, paste in the new text, and click "Commit changes." The live page updates automatically within a minute or two.

**Direct edit:** if you're comfortable editing text, you can open `committees-data.js` directly on GitHub and change the values by hand — the file has full instructions and a color-name list built into its comments at the top.

## A note on the data

The times currently in `committees-data.js` were transcribed from the semester's confirmed committee meeting list. One item — APC — was given as "8:30 am to 9:30 pm," which would be a 13-hour meeting, so it's been entered as **8:30–9:30 AM**. Double-check that against the official committee list before publishing, and correct it in `committees-data.js` if needed.

## Design notes

- Colors and fonts match Berea's brand palette (Berea blue, chartreuse, brand green, plus a few complementary accent colors so all ten committees are visually distinct).
- Biweekly meetings show a diagonal-stripe pattern and a "Biweekly" tag.
- The Thursday General Assembly / Convocation block is marked as **protected time** rather than a committee — it uses a different stripe pattern so people don't mistake it for a committee they could double-book against. Change its `type` back to `"committee"` in the data file if that's not the right framing.
- The grid scrolls horizontally on narrow/mobile screens rather than collapsing to a list, so the day-to-day comparison stays intact everywhere.
