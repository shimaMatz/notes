# AGENTS.md

## Purpose

This repository stores personal technical notes as static HTML pages.

## Content rules

- Create one page per question or topic.
- Use plain HTML and reference shared styles from `/styles/site.css`.
- End every note with source links to primary references when possible.
- Do not include secrets, tokens, passwords, private keys, or personal data.
- Do not commit JSON, YAML, `.env`, or credential-like files unless I explicitly ask for them.
- Prefer ASCII-only filenames and URL paths.

## Suggested note flow

When I start a request with `質問`, create a new HTML note under `/questions/<slug>/index.html`, update `/index.html`, commit the changes, and push them to `main`.

## Chat-driven article creation

- Treat any user message starting with `質問` as a request to add or update an article in this repository.
- After creating the article, also update the top page so the note is discoverable.
- Use a concise commit message based on the article topic.
- Push to `origin/main` after the commit succeeds.

## GitHub Issue-driven article creation

- Open GitHub Issues titled with the prefix `質問:` are article requests.
- The issue body should explain the topic, desired depth, and any required source links.
- When processing an issue-based request, create or update the article, commit, push, then comment on the issue with the published page URL and close the issue.
