import { access, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export type NoteCategory = "tech" | "service" | "experience";

export interface NoteSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: NoteCategory;
  thumbnail: string;
}

const questionsDirectory = join(process.cwd(), "questions");

const decodeEntities = (value: string) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");

const textOnly = (value: string) =>
  decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const firstMatch = (html: string, pattern: RegExp) => {
  const match = html.match(pattern);
  return match ? textOnly(match[1]) : "";
};

const findDescription = (html: string) => {
  const meta = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (meta) return decodeEntities(meta[1].trim());

  const paragraphs = [...html.matchAll(/<p(?:\s+class=["']([^"']*)["'])?[^>]*>([\s\S]*?)<\/p>/gi)];
  const content = paragraphs.find(([, className = "", body]) => {
    return !/(?:eyebrow|meta)/.test(className) && textOnly(body).length > 24;
  });

  return content ? textOnly(content[2]) : "概要は記事本文をご覧ください。";
};

const fileExists = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const firstImage = (html: string) => {
  const metaImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (metaImage) return decodeEntities(metaImage[1].trim());

  const image = html.match(/<img\s+[^>]*src=["']([^"']+)["']/i);
  return image ? decodeEntities(image[1].trim()) : "";
};

const categoryFor = (text: string): NoteCategory => {
  if (/アプリ|ウィジェット|タイマー|日記|葉書|星座|小庭|石庭/.test(text)) return "experience";
  if (/Mapbox|AI|SkillSpector|技術ノート/.test(text)) return "tech";
  return "service";
};

export const loadNotes = async (): Promise<NoteSummary[]> => {
  const entries = await readdir(questionsDirectory, { withFileTypes: true });

  const notes = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async ({ name: slug }) => {
        const html = await readFile(join(questionsDirectory, slug, "index.html"), "utf8");
        const title = firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
        const date = firstMatch(html, /<p[^>]*class=["'][^"']*meta[^"']*["'][^>]*>[^<]*?(\d{4}-\d{2}-\d{2})[\s\S]*?<\/p>/i);
        const description = findDescription(html);
        const articleImage = firstImage(html);
        const localThumbnail = (await fileExists(join(questionsDirectory, slug, "thumbnail.svg"))) ? "thumbnail.svg" : "";
        const thumbnail = articleImage || localThumbnail;

        return {
          slug,
          title,
          description,
          date: date || "1970-01-01",
          category: categoryFor(`${title} ${description}`),
          thumbnail,
        } satisfies NoteSummary;
      }),
  );

  return notes.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, "ja"));
};
