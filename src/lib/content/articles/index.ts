import ecommerce from "./ecommerce.json";
import ramadanPreparation from "./ramadan-preparation.json";
import egyptDessertMarket from "./egypt-dessert-market.json";
import backToSchoolCampaign from "./back-to-school-campaign.json";

export type ArticleFigure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** "side" floats a tall image beside the text instead of full width. */
  layout?: "full" | "side";
};

export type ArticleSection = {
  heading: string | null;
  /** Shown under the heading, before the paragraphs. */
  figure?: ArticleFigure;
  paragraphs: string[];
};

const ARTICLES: Record<string, ArticleSection[]> = {
  ecommerce: ecommerce as ArticleSection[],
  "ramadan-preparation": ramadanPreparation as ArticleSection[],
  "egypt-dessert-market": egyptDessertMarket as ArticleSection[],
  "back-to-school-campaign": backToSchoolCampaign as ArticleSection[],
};

/** Deduplicate consecutive identical paragraphs from Framer export */
function dedupeParagraphs(paragraphs: string[]): string[] {
  const out: string[] = [];
  for (const p of paragraphs) {
    const trimmed = p.replace(/^;\s*/, "").trim();
    if (!trimmed) continue;
    if (out.length && out[out.length - 1] === trimmed) continue;
    out.push(trimmed);
  }
  return out;
}

export function getArticleSections(slug: string): ArticleSection[] | undefined {
  const raw = ARTICLES[slug];
  if (!raw) return undefined;
  return raw.map((s) => ({
    heading: s.heading,
    figure: s.figure,
    paragraphs: dedupeParagraphs(s.paragraphs),
  }));
}
