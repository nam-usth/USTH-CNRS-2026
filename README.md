# VAST–CNRS Winter School 2026

The official page of the **VAST–CNRS Winter School 2026 — Interdisciplinary Data Science: From Mathematics, Modeling to Computing** (November 16–19, 2026, Tam Dao, Phu Tho, Vietnam) is now on the USTH website:

<https://usth.edu.vn/en/winter-school-vast-cnrs-2026-13501/>

This GitHub Pages site only redirects there.

## Structure

| Path | Content |
| --- | --- |
| `index.html` | Redirects the site root to the USTH page |
| `program.html` | Redirects the old program link to the USTH page |
| `legacy/` | The original static site (five HTML pages and `assets/`), kept unchanged for reference |
| `_private/` | Internal working files; ignored by Git and not deployed |

GitHub Pages cannot send server-side redirects, so each redirect page uses a `meta refresh`, a `location.replace()` script and a visible fallback link, plus a `canonical` tag pointing to the USTH page.

## Legacy site

The original site still works from its folder, at `/legacy/` on GitHub Pages or locally:

```bash
python -m http.server 8000 -d legacy
```

Then open <http://localhost:8000>. Its editing notes are in the git history of this README (before the move to `legacy/`).

## Contact

Organizing Committee — [ict_dept@usth.edu.vn](mailto:ict_dept@usth.edu.vn)
