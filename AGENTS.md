# AGENTS.md

## Purpose

This repository stores personal technical notes as static HTML pages.

## Content rules

- Create one page per question or topic.
- Use plain HTML and reference shared styles from `/styles/site.css`.
- Include at least one relevant image, diagram, or figure in every note page.
- End every note with source links to primary references when possible.
- Do not include secrets, tokens, passwords, private keys, or personal data.
- Do not commit JSON, YAML, `.env`, or credential-like files unless I explicitly ask for them.
- Prefer ASCII-only filenames and URL paths.

## Editorial scope

- When the user does not specify a topic, research current social issues and select a topic autonomously.
- Do not select caregiving or problems inside the IT industry as article themes unless the user explicitly requests them.
- For non-IT social problems, propose a concrete IT-based solution such as a small Web service, shared registry, workflow tool, or notification system.
- Treat social issues broadly. Eligible themes include incidents, accidents, public safety, regional decline, disappearing industries, and the loss of valuable Japanese techniques or craftsmanship.
- Prefer primary sources from governments, public institutions, standards bodies, or the organizations directly responsible for the subject.
- Avoid repeating a recently covered field when another well-supported theme is available.

## Reproducible research record

- Follow `EDITORIAL_POLICY.md` when selecting a topic for chat requests, GitHub Issue requests, and scheduled runs.
- For every autonomously selected topic, append a short entry to the selection log in `EDITORIAL_POLICY.md` with the date, selected theme, reason, exclusions checked, and primary sources.
- Preserve the request and its outcome in GitHub through the committed article, selection log, and commit history. For Issue-driven work, also retain the published URL in the Issue comment before closing it.
- A scheduled run with no publishable topic or no matching Issue must still leave a clear run result in the mechanism used to invoke it; do not invent an article merely to create a commit.

## Suggested note flow

When I start a request with `質問`, create a new HTML note under `/questions/<slug>/index.html`, update `/index.html`, commit the changes, and push them to `main`.

## Chat-driven article creation

- Treat any user message starting with `質問` as a request to add or update an article in this repository.
- After creating the article, also update the top page so the note is discoverable.
- Ensure the note includes at least one relevant image or diagram.
- Use a concise commit message based on the article topic.
- Push to `origin/main` after the commit succeeds.

## GitHub Issue-driven article creation

- Open GitHub Issues titled with the prefix `質問:` are article requests.
- The issue body should explain the topic, desired depth, and any required source links.
- When processing an issue-based request, create or update the article with at least one image or diagram, commit, push, then comment on the issue with the published page URL and close the issue.

## No-open-issue fallback article creation

- If an automation checks GitHub Issues and finds no open article requests, create one business-plan note instead of doing nothing.
- The fallback topic must be a non-IT, non-caregiving social problem. Avoid software-industry, AI-industry, developer-tool, technical-education, or caregiving problems; using IT to solve the selected social problem is required.
- Before choosing a fallback topic, check existing notes in `/index.html` and `/questions/*/index.html`. Do not create a new note if the same social problem, same target users, and same operational gap have already been covered.
- If a candidate is related to an existing note, make the angle clearly different. For example, change the beneficiary, setting, operational bottleneck, or revenue model; otherwise choose another topic.
- Prefer fallback topics that help a technically skilled reader notice non-IT social issues adjacent to public safety, housing, parenting, education, pets, local administration, regional mobility, traditional industries, craftsmanship, and community operations.
- Private user context may be used only to choose useful topic areas. Never include private profile details, family details, residence details, pet details, or other personal data in notes, diagrams, GitHub Issues, commit messages, or public pages.
- Research current primary or high-trust sources before choosing the topic. Prefer government, municipality, official statistics, public agencies, universities, and established nonprofit sources.
- Keep the business deliberately small: assume an initial reachable market that can produce about 1,000,000 yen in annual revenue, not a national TAM.
- Every fallback proposal must define the IT service, its users, core workflow, system requirements, and why paper, phone, chat, or spreadsheets are insufficient.
- Use `templates/business-plan-note-template.html` as the article structure.
- The plan must show the relation between problem, target users, existing gaps, service features, revenue, spending, profit, system requirements, AI-assisted development timeline, required people, and source links.
- Include the formula `売上 - 支出 = 利益` and fill the numbers with realistic assumptions.
- Include system spending by category, what each item is needed for, and how much AI-assisted development can reduce time or cost.
- Include required headcount and human requirements, including what can be done by one operator and what should be outsourced.
- After creating the fallback article, update `/index.html`, commit with a concise topic-based message, and push to `origin/main`.
