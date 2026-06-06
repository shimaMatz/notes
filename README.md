# notes

Static HTML knowledge notes for quick capture and later review.

## Structure

- `index.html`: top page with note links
- `questions/<slug>/index.html`: one note per topic
- `styles/site.css`: shared site styles
- `.github/workflows/static.yml`: GitHub Pages deployment
- `AGENTS.md`: authoring and safety rules

## Local preview

Open `index.html` directly in a browser, or run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

1. Push this repository to GitHub.
2. In repository settings, enable GitHub Pages with GitHub Actions as the source.
3. Push changes to `main` or `master`.
