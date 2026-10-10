# VAST–CNRS Winter School 2026

Website of the **VAST–CNRS Winter School 2026 — Interdisciplinary Data Science: From Mathematics, Modeling to Computing**, held on November 16–19, 2026 in Tam Dao, Phu Tho, Vietnam.

The site is plain static HTML and CSS. It needs no build step and no framework.

## Structure

| Path | Content |
| --- | --- |
| `index.html` | Home: overview, topics, key facts, organizers and partners |
| `speakers.html` | Keynote speakers and the full list of speakers |
| `committee.html` | Organizing Committee |
| `program.html` | Day-by-day tentative program |
| `venue.html` | Venue, travel and directions |
| `assets/style.css` | Shared styles; colors and font are defined as tokens at the top |
| `assets/site.js` | Program tabs, map switcher and image fallbacks |
| `assets/` | Logos and the Tam Dao header photo |
| `_private/` | Internal working files; ignored by Git and not deployed |

## Local preview

Serve the folder with any static file server, for example:

```bash
python -m http.server 8000
```

or, with Node.js:

```bash
npx serve -l 8000
```

Then open <http://localhost:8000>.

## Editing notes

- **Navigation and footer** are repeated in each HTML page. Apply any change to all five pages.
- **After editing `assets/style.css` or `assets/site.js`**, bump the `?v=` date in their links on all five pages. Otherwise browsers keep the cached copy for up to 10 minutes.
- **Logos** sit in the "Organizers and partners" band under the hero in `index.html`: the first row holds VAST and CNRS, the second the other partners. To add one, copy an existing `<a class="logo">` block into the right row.
- **Keynote portraits** are loaded from `assets/speaker-*.jpg` (4:5 ratio, at least 600×750 px). Until a file is present, a “Photo to come” placeholder is shown.
- **Venue coordinates** in `venue.html` currently point to Tam Dao town. Replace them with the hotel's coordinates once it is confirmed.

## Deployment

Publish the five HTML files and the `assets/` folder to any static host.

## Contact

Organizing Committee — [ict_dept@usth.edu.vn](mailto:ict_dept@usth.edu.vn)
