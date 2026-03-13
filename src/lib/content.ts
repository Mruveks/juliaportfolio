import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  category: string;
  order: number;
}

export interface ReelItem {
  slug: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnail?: string;
  order: number;
}

function getContentDir(collection: string): string {
  return path.join(process.cwd(), "content", collection);
}

export function getPortfolioItems(): PortfolioItem[] {
  const dir = getContentDir("portfolio");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const { data } = matter(fs.readFileSync(filePath, "utf-8"));

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      image: data.image || undefined,
      videoUrl: data.videoUrl || undefined,
      category: data.category || "Content Creation",
      order: Number(data.order) || 0,
    } as PortfolioItem;
  });

  return items.sort((a, b) => a.order - b.order);
}

export function getReelItems(): ReelItem[] {
  const dir = getContentDir("reels");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const { data } = matter(fs.readFileSync(filePath, "utf-8"));

    return {
      slug,
      title: data.title || "",
      description: data.description || undefined,
      videoUrl: data.videoUrl || "",
      thumbnail: data.thumbnail || undefined,
      order: Number(data.order) || 0,
    } as ReelItem;
  });

  return items.sort((a, b) => a.order - b.order);
}
