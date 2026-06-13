# Business Plan Fallback Automation Prompt

Use this prompt for a scheduled automation that creates a note when there are no open GitHub Issue article requests.

## Task

Check open GitHub Issues in `shimaMatz/notes`.

1. If there is an open Issue whose title starts with `質問:` or has the `article-request` label, process that Issue as the article request.
2. If there are no open article request Issues, research one current non-IT social problem and create a business-plan note for a small service that can plausibly reach about 1,000,000 yen in first-year revenue.

## Topic Rules

- The fallback topic must be a social problem outside the IT industry.
- The proposed business may use a small web system, but the social issue itself must not be an IT or software problem.
- Choose a narrow operational gap that one person can realistically serve.
- Prefer problems where timing, coordination, reporting, local labor, inventory, transport, communication, or administrative burden creates pain.
- Avoid giant-platform ideas. Define a reachable first-year market instead of a national TAM.
- Before choosing a topic, scan existing notes in `/index.html` and `/questions/*/index.html`.
- Do not create a duplicate note. Reject a candidate if an existing note already covers the same social problem, target users, and operational gap.
- If a candidate is adjacent to an existing note, make the distinction explicit in the new angle before writing; otherwise choose a different topic.
- Prefer topics that help a technically skilled reader discover non-IT social issues adjacent to everyday life, family, housing, caregiving, parenting, pets, local administration, regional mobility, and community operations.
- Private user context may be injected by the automation scheduler. Use it only to guide topic selection. Never reveal or paraphrase private profile details in the article, diagram, sources, commit message, GitHub Issue comments, or public pages.

## Required Research

- Use current primary or high-trust sources.
- Prefer government agencies, local governments, public statistics, official program pages, universities, and established nonprofits.
- Include source links at the end of the note.
- If the source data is uncertain or regional, state the assumption clearly.

## Required Article Output

Create `/questions/<ascii-slug>/index.html` using plain HTML and `/styles/site.css`.

Also create at least one relevant diagram, figure, or image under the same note directory. A simple SVG system or operation diagram is acceptable.

Update `/index.html` so the note is discoverable.

Use `templates/business-plan-note-template.html` as the structure. The article must include:

- Problem summary
- What social problem is being cut out
- Current field issues and existing means
- Service concept
- Useful functions or service components
- 1,000,000 yen-scale market setting
- Revenue model
- Spending and system requirements
- AI-assisted development estimate
- Required people and human requirements
- Profit calculation using `売上 - 支出 = 利益`
- Risks and first validation steps
- Sources

## Completion

Commit the changes with a concise topic-based message.

Push to `origin/main`.

If the work came from an Issue, comment with the published page URL and close the Issue.
