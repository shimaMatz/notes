# AGENTS.md

## Purpose

This repository stores personal technical notes and publishes them as a static Astro site.

## Content rules

- Create one page per question or topic.
- Keep note bodies as plain HTML under `/questions/` and reference shared styles from `/styles/site.css`; Astro builds the catalog and site shell.
- For every newly created article, first insert exactly three placeholders in the article text: `[図解1]`, `[図解2]`, and `[図解3]`.
- Then create three local 16:9 editorial diagrams from `templates/editorial-image-generation-prompt.md`, using the article text with those placeholders included.
- Replace the three placeholders with the generated diagrams. Use the first generated diagram as the article listing thumbnail through `og:image`.
- Include exactly two relevant app wireframe images in every business-plan note page: one primary overview/list screen and one detail/action screen.
- Store both wireframes as local SVG files in the article directory and render each in its own `<figure>` with a descriptive `<figcaption>`.
- End every note with source links to primary references when possible.
- Do not include secrets, tokens, passwords, private keys, or personal data.
- Do not commit JSON, YAML, `.env`, or credential-like files unless I explicitly ask for them.
- Prefer ASCII-only filenames and URL paths.

## Editorial scope

- When the user does not specify a topic, research both current social issues and appealing small consumer-app experiences, then select a commercially plausible topic autonomously.
- A topic does not need to solve a social problem. Ambient, playful, visual, creative, widget-based, and everyday-delight apps are eligible when their value is clear without inventing a serious problem.
- Do not select caregiving as an article theme unless the user explicitly requests it.
- For social problems, propose a concrete IT-based solution such as a small Web service, shared registry, workflow tool, or notification system.
- For experience-led apps, explain the core delight, context trigger, repeat-use loop, device surface, and why a user would keep or pay for it.
- Prefer primary sources from governments, public institutions, standards bodies, or the organizations directly responsible for the subject.
- Avoid repeating a recently covered field when another well-supported theme is available.

## Reproducible research record

- Follow `EDITORIAL_POLICY.md` when selecting a topic for chat requests, GitHub Issue requests, and scheduled runs.
- For every autonomously selected topic, append a short entry to the selection log in `EDITORIAL_POLICY.md` with the date, selected theme, reason, exclusions checked, and primary sources.
- Preserve the request and its outcome in GitHub through the committed article, selection log, and commit history. For Issue-driven work, also retain the published URL in the Issue comment before closing it.
- A scheduled run with no publishable topic or no matching Issue must still leave a clear run result in the mechanism used to invoke it; do not invent an article merely to create a commit.

## Suggested note flow

When I start a request with `質問`, create a new HTML note under `/questions/<slug>/index.html`, verify that the Astro catalog discovers it, commit the changes, and push them to `main`.

## Chat-driven article creation

- Treat any user message starting with `質問` as a request to add or update an article in this repository.
- After creating the article, run the Astro build and verify that the generated top page includes it.
- Insert `[図解1]`, `[図解2]`, and `[図解3]` at the intended positions before image generation. Generate the three editorial diagrams by inserting that finished article body into `templates/editorial-image-generation-prompt.md`.
- Ensure a business-plan note includes two app wireframes: an overview/list screen and a detail/action screen.
- Use a concise commit message based on the article topic.
- Push to `origin/main` after the commit succeeds.

## GitHub Issue-driven article creation

- Open GitHub Issues titled with the prefix `質問:` are article requests.
- The issue body should explain the topic, desired depth, and any required source links.
- When processing an issue-based business-plan request, create or update the article with two app wireframes, commit, push, then comment on the issue with the published page URL and close the issue.
- When processing any Issue-based article request, apply the editorial image prompt after placing `[図解1]`, `[図解2]`, and `[図解3]`, include the three generated diagrams, then comment with the published page URL and close the issue.

## No-open-issue fallback article creation

- If an automation checks GitHub Issues and finds no open article requests, create exactly four business-plan notes in that run instead of doing nothing.
- Fallback topics may be either non-caregiving social-problem solutions or small experience-led consumer apps. Do not force every idea into a social-problem narrative.
- Before choosing fallback topics, inspect every existing note in `/questions/*/index.html`, plus the other three candidates in the current batch.
- Reusing a past article's core problem or experience, primary audience, or central usage loop is prohibited. Reject a candidate if any of those substantially overlaps an existing note or another candidate in the same batch; changing only the visual theme, title, region, price, or revenue model is not enough.
- Record the duplicate check for all four selected topics in `EDITORIAL_POLICY.md`.
- Keep a mix of useful social-problem services and delightful consumer apps. Eligible consumer directions include time/weather-linked worlds, widgets, calm ambient displays, collections, lightweight creativity, and small daily rituals.
- Private user context may be used only to choose useful topic areas. Never include private profile details, family details, residence details, pet details, or other personal data in notes, diagrams, GitHub Issues, commit messages, or public pages.
- Research current primary or high-trust sources before choosing the topic. Prefer government, municipality, official statistics, public agencies, universities, and established nonprofit sources.
- Keep the business deliberately small: assume an initial reachable market that can produce about 1,000,000 yen in annual revenue, not a national TAM.
- Every fallback proposal must define the IT service, its users, core workflow, system requirements, and why paper, phone, chat, or spreadsheets are insufficient.
- Base the system architecture and infrastructure spending on AWS. List each AWS resource separately, including its purpose, usage assumption, estimated monthly cost, and estimated annual cost.
- At minimum, consider Amazon S3/CloudFront, Amazon Cognito, Amazon API Gateway, AWS Lambda, Amazon DynamoDB, Amazon SES, Amazon CloudWatch, AWS Backup, AWS Budgets, and Amazon Route 53. Add Amazon Location Service when the product uses maps.
- Explain exactly what DynamoDB stores for that product, such as organizations, cases, statuses, assignments, deadlines, and audit history. Do not use generic rows such as "backend: 36,000 yen".
- State the AWS region, exchange-rate assumption, whether Free Tier credits are excluded, and that the estimate must be recalculated with AWS Pricing Calculator before launch.
- Every fallback article must show two local SVG app wireframes: an overview/list screen and a detail/action screen. A conceptual flow diagram does not satisfy this requirement.
- Every fallback article must also include the three editorial diagrams generated from `templates/editorial-image-generation-prompt.md`; place `[図解1]`, `[図解2]`, and `[図解3]` in the draft first, then replace them with figures. The first generated diagram is also the listing thumbnail.
- Use `templates/business-plan-note-template.html` as the article structure.
- The plan must show the relation between problem, target users, existing gaps, service features, revenue, spending, profit, system requirements, AI-assisted development timeline, required people, and source links.
- Include the formula `売上 - 支出 = 利益` and fill the numbers with realistic assumptions.
- Include system spending by category, what each item is needed for, and how much AI-assisted development can reduce time or cost.
- Include required headcount and human requirements, including what can be done by one operator and what should be outsourced.
- After creating all four fallback articles, verify the generated Astro catalog, commit the batch with a concise message, and push to `origin/main`.
