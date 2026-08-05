/* ==========================================================================
   BEREA COLLEGE ACADEMIC AFFAIRS — COMMITTEE MEETING SCHEDULE (DATA FILE)
   ==========================================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT EACH SEMESTER.

   You do NOT need to know how to code to update this. Just follow the
   pattern of the entries already here. If you'd rather use a simple
   point-and-click form instead of editing this file by hand, open
   admin.html in a browser — it will build the entry for you and let you
   copy/paste the result back in here.

   ---------------------------------------------------------------------
   STEP-BY-STEP: ADDING OR CHANGING A COMMITTEE
   ---------------------------------------------------------------------
   1. Find the committee you want to change in the list below, OR copy
      one whole line (from the { to the },) to make a new entry.
   2. Edit the values between the quotation marks. Do not remove any
      quotation marks, commas, or curly braces { } — just change the
      text/numbers inside them.
   3. Save the file and commit/push it to GitHub (or paste the updated
      text into GitHub's web editor for this file). The live page
      updates automatically — there is nothing else to build or deploy.

   FIELD GUIDE — what each part means:

     name        The label shown on the schedule block. Keep it short —
                 long names get cramped in the grid. Put full names or
                 extra context in "notes" instead.

     day         One of: "Monday", "Tuesday", "Wednesday", "Thursday",
                 "Friday". Must be spelled exactly like that, in quotes.

     start       Start time using a 12-hour clock, like "9:00 AM" or
                 "2:30 PM". Always include AM or PM.

     end         End time, same format as start.

     frequency   "weekly" or "biweekly" (every other week). Biweekly
                 meetings get a small striped pattern and a "Biweekly"
                 tag on the schedule so people notice.

     color       Pick one word from the PALETTE list directly below —
                 e.g. "blue", "teal", "gold". Using the same color for
                 two committees is fine, but different colors make the
                 grid easier to scan.

     type        Leave this as "committee" for a normal committee
                 meeting. Use "protected" instead for a block of time
                 that is reserved/blocked off (like the Thursday
                 General Assembly / Convocation slot) rather than a
                 specific standing committee — it will be styled
                 differently (a diagonal-striped "reserved" look) so
                 people don't mistake it for a committee they could
                 double-book against.

     notes       Optional. Anything extra you want people to see when
                 they click/tap the block — full committee name, room,
                 chair's name, a link, etc. Leave as "" (empty quotes)
                 for none.

   ---------------------------------------------------------------------
   COLOR PALETTE — use one of these words for "color" above
   ---------------------------------------------------------------------
   blue, sky, teal, green, chartreuse, gold, coral, slate, plum, navy

   (The actual colors these map to are defined once, in index.html and
   admin.html, using Berea's brand colors. You don't need to touch that
   — just use the words above.)
   ========================================================================== */

window.COMMITTEE_SCHEDULE = {

  // Update this at the start of every semester — it's shown in the
  // page header. Example: "Fall 2026", "Spring 2027", "Summer 2027".
  semester: "Fall 2026",

  // Optional: shows a small "last updated" line under the header.
  // Update it whenever you save changes. Format: "Month Day, Year".
  lastUpdated: "August 5, 2026",

  committees: [
    {
      name: "SPC",
      day: "Monday",
      start: "4:00 PM",
      end: "5:00 PM",
      frequency: "weekly",
      color: "blue",
      type: "committee",
      notes: ""
    },
    {
      name: "AC",
      day: "Tuesday",
      start: "9:00 AM",
      end: "12:00 PM",
      frequency: "weekly",
      color: "teal",
      type: "committee",
      notes: ""
    },
    {
      name: "Division & Department Meetings",
      day: "Tuesday",
      start: "3:00 PM",
      end: "4:00 PM",
      frequency: "weekly",
      color: "gold",
      type: "committee",
      notes: ""
    },
    {
      name: "Labor Meetings",
      day: "Tuesday",
      start: "4:00 PM",
      end: "5:00 PM",
      frequency: "weekly",
      color: "coral",
      type: "committee",
      notes: ""
    },
    {
      name: "FSC",
      day: "Wednesday",
      start: "8:00 AM",
      end: "9:00 AM",
      frequency: "weekly",
      color: "green",
      type: "committee",
      notes: ""
    },
    {
      name: "Convocation Committee",
      day: "Wednesday",
      start: "2:30 PM",
      end: "3:30 PM",
      frequency: "biweekly",
      color: "plum",
      type: "committee",
      notes: ""
    },
    {
      name: "EC",
      day: "Wednesday",
      start: "4:00 PM",
      end: "5:00 PM",
      frequency: "weekly",
      color: "navy",
      type: "committee",
      notes: ""
    },
    {
      name: "APC",
      day: "Thursday",
      start: "8:30 AM",
      end: "9:30 AM",
      frequency: "weekly",
      color: "sky",
      type: "committee",
      notes: ""
    },
    {
      name: "COGE",
      day: "Thursday",
      start: "12:00 PM",
      end: "1:00 PM",
      frequency: "weekly",
      color: "chartreuse",
      type: "committee",
      notes: ""
    },
    {
      name: "General Assembly / Convocations",
      day: "Thursday",
      start: "3:00 PM",
      end: "5:00 PM",
      frequency: "weekly",
      color: "slate",
      type: "protected",
      notes: "Protected time — please avoid scheduling other meetings in this block."
    }
  ]
};
