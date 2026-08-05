# Committee Meeting Schedule — Berea College Academic Affairs

A weekly visual schedule of standing committee meetings, built to run entirely on GitHub Pages with no server, database, or coding required to update it each semester.

## What's in this repo

- **`index.html`** — the public schedule page people visit. It reads its content from `committees-data.js` and draws the weekly grid automatically.
- **`committees-data.js`** — the one file an admin edits each semester. It lists every committee's day, time, frequency, and color, with plain-English instructions written directly in the file.
- **`admin.html`** — an easier, point-and-click alternative to editing `committees-data.js` by hand. Open it in any browser, use dropdowns and time pickers to make changes, preview the result, then copy/paste the generated text into `committees-data.js` on GitHub.

## Putting this on GitHub Pages

1. Create a new repository (or use an existing one) and add these three files to it.
2. In the repo, go to **Settings → Pages**, set "Source" to the branch and folder these files are in (usually the root of the `main` branch), and save.
3. GitHub will give you a URL like `https://<your-org>.github.io/<repo-name>/` — that's the live schedule.

No build step, no dependencies to install, nothing to run. The two Google Fonts used (Newsreader, Barlow, Barlow Condensed, Google Sans Code) load from Google's CDN, so an internet connection is the only requirement.

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
