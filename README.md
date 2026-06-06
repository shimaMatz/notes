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

## Operating modes

### 1. Create from chat

Send a message that starts with `質問:`. The agent should:

1. Create or update an HTML note under `questions/<slug>/index.html`
2. Add the link to `index.html`
3. Commit the change
4. Push to `origin/main`

### 2. Create from GitHub Issue

Open an issue with a title that starts with `質問:` and describe the article request in the body.

The scheduled automation should:

1. Check open issues in `shimaMatz/notes`
2. Process issues whose title starts with `質問:`
3. Create or update the note and index
4. Commit and push to `main`
5. Comment with the published URL
6. Close the processed issue
