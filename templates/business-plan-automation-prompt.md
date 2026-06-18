# Business Plan Fallback Automation Prompt

Use this prompt for a scheduled automation that creates four notes when there are no open GitHub Issue article requests.

## Task

Check open GitHub Issues in `shimaMatz/notes`.

1. If there is an open Issue whose title starts with `質問:` or has the `article-request` label, process that Issue as the article request.
2. If one or more matching Issues exist, process those Issues only; do not add fallback articles merely to reach four.
3. If there are no open article request Issues, research four distinct current non-IT, non-caregiving social problems and create exactly four IT-based business-plan notes. Each plan must plausibly reach about 1,000,000 yen in first-year revenue.

## Topic Rules

- The fallback topic must be a social problem outside the IT industry.
- The proposed business must use a concrete IT solution such as a small Web service, shared registry, workflow tool, notification system, or reporting system, while the social issue itself must not be an IT or software problem.
- Do not select caregiving as the problem domain unless the user explicitly requests it.
- Choose a narrow operational gap that one person can realistically serve.
- Prefer problems where timing, coordination, reporting, local labor, inventory, transport, communication, or administrative burden creates pain.
- Avoid giant-platform ideas. Define a reachable first-year market instead of a national TAM.
- Before choosing topics, scan every existing note in `/index.html` and `/questions/*/index.html`, then compare all four candidates with one another.
- Past-article overlap is prohibited. Reject a candidate when its core social problem, primary target users, or operational bottleneck substantially overlaps any existing note.
- The four articles in one run must also be mutually distinct on core social problem, primary target users, and operational bottleneck.
- A different title, region, price, feature list, or revenue model does not make an overlapping topic unique.
- Write the duplicate-check result for all four selected topics to the selection log in `EDITORIAL_POLICY.md`.
- Prefer topics that help a technically skilled reader discover non-IT social issues adjacent to public safety, housing, parenting, education, pets, local administration, regional mobility, traditional industries, craftsmanship, and community operations.
- Private user context may be injected by the automation scheduler. Use it only to guide topic selection. Never reveal or paraphrase private profile details in the article, diagram, sources, commit message, GitHub Issue comments, or public pages.

## Required Research

- Use current primary or high-trust sources.
- Prefer government agencies, local governments, public statistics, official program pages, universities, and established nonprofits.
- Include source links at the end of the note.
- If the source data is uncertain or regional, state the assumption clearly.

## Required Article Output

For each of the four topics, create `/questions/<ascii-slug>/index.html` using plain HTML and `/styles/site.css`.

For every article, create exactly two local SVG app wireframes under its note directory:

1. A primary overview/list screen showing the main records, statuses, filters, or alerts.
2. A detail/action screen showing one selected record, its history, responsible party, and the next action.

Render both wireframes as separate `<figure>` elements with descriptive alt text and captions. Conceptual flow diagrams do not satisfy this requirement.

Update `/index.html` so the note is discoverable.

Use `templates/business-plan-note-template.html` as the structure. The article must include:

- Problem summary
- What social problem is being cut out
- Current field issues and existing means
- Service concept
- Useful functions or service components
- Why paper, phone, chat, spreadsheets, or generic tools are insufficient
- 1,000,000 yen-scale market setting
- Revenue model
- Spending and system requirements
- AI-assisted development estimate
- Required people and human requirements
- Profit calculation using `売上 - 支出 = 利益`
- Risks and first validation steps
- Sources

## Completion

Commit all four fallback articles as one batch with a concise message.

Push to `origin/main`.

If the work came from an Issue, comment with the published page URL and close the Issue.
