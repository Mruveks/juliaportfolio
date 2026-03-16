import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  image?: string;
  thumbnail?: string;
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

export interface Skill {
  title: string;
  desc: string;
}

export interface StatItem {
  value: number;
  display: string;
  label: string;
}

export interface Brand {
  name: string;
  abbr: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  price_suffix: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface SiteContent {
  hero_eyebrow: string;
  hero_tagline: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_stat_years: string;
  hero_stat_years_label: string;
  hero_stat_brands: string;
  hero_stat_brands_label: string;
  about_heading: string;
  about_bio_1: string;
  about_bio_2: string;
  skills: Skill[];
  stats: StatItem[];
  brands: Brand[];
  testimonials: Testimonial[];
  pricing: PricingPlan[];
  contact_heading: string;
  contact_subtext: string;
}

const defaultContent: SiteContent = {
  hero_eyebrow: "Social Media Manager",
  hero_tagline: "Wideo w trendzie? Real time marketing? Jestem za! Pomagam markom rosnąć w mediach społecznościowych.",
  hero_cta_primary: "Współpracuj ze mną",
  hero_cta_secondary: "Zobacz moje prace",
  hero_stat_years: "5+",
  hero_stat_years_label: "lat doświadczenia",
  hero_stat_brands: "15+",
  hero_stat_brands_label: "marek",
  about_heading: "Osoba stojąca\nza strategią.",
  about_bio_1: "Cześć, jestem Julia — Social Media Manager z Warszawy z ponad 5-letnim doświadczeniem. Specjalizuję się w trendach, voice over, krótkich formach wideo i fotografii produktowej.",
  about_bio_2: "Wideo w trendzie? Real time marketing? Jestem za! Wierzę, że najlepsze treści to te, które łapią moment — i zamieniają go w zasięg.",
  skills: [
    { title: "Trends", desc: "Śledzę i tworzę trendy zanim staną się mainstreamem. Twoja marka zawsze na czasie." },
    { title: "Voice Over", desc: "Profesjonalny głos do filmów, kampanii i materiałów reklamowych." },
    { title: "Short Video", desc: "Krótkie formy wideo, które zatrzymują scroll i budują zasięg na TikToku i Instagramie." },
    { title: "Product Photo", desc: "Zdjęcia produktowe, które sprzedają — estetyczne, angażujące, dopasowane do platformy." },
  ],
  stats: [
    { value: 2500000, display: "2.5M+", label: "Łączny zasięg" },
    { value: 15, display: "15+", label: "Obsłużonych marek" },
    { value: 180, display: "180%", label: "Średni wzrost zaangażowania" },
    { value: 98, display: "98%", label: "Zadowolonych klientów" },
  ],
  brands: [
    { name: "Vogue Poland", abbr: "VP" },
    { name: "Reserved", abbr: "RE" },
    { name: "Allegro", abbr: "AL" },
    { name: "CCC Group", abbr: "CC" },
    { name: "Dior Beauty", abbr: "DB" },
    { name: "Empik", abbr: "EM" },
  ],
  testimonials: [
    {
      quote: "Julia całkowicie odmieniła nasze podejście do social mediów. W ciągu 6 miesięcy wzrósł nam zasięg o 240%, a sprzedaż z Instagrama podwoiła się.",
      name: "Marta Kowalska",
      role: "CMO",
      company: "Brand Studio",
      initials: "MK",
    },
    {
      quote: "Profesjonalizm, kreatywność i realne wyniki — to trzy słowa, które najlepiej opisują współpracę z Julią. Polecam każdej marce, która chce realnie rosnąć.",
      name: "Tomasz Wiśniewski",
      role: "CEO",
      company: "E-commerce Polska",
      initials: "TW",
    },
    {
      quote: "Nareszcie mamy strategię, która działa. Julia rozumie zarówno algorytmy, jak i psychologię odbiorcy. Nasze treści wreszcie angażują.",
      name: "Karolina Dąbrowska",
      role: "Head of Marketing",
      company: "Fashion Forward",
      initials: "KD",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "2 000",
      price_suffix: "zł",
      period: "/ miesiąc",
      description: "Idealne dla małych marek stawiających pierwsze kroki w social mediach.",
      features: [
        "2 platformy (Instagram + Facebook lub TikTok)",
        "12 postów miesięcznie",
        "Strategia i harmonogram treści",
        "Miesięczny raport analityczny",
        "Obsługa komentarzy i wiadomości",
      ],
      cta: "Zacznij teraz",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "4 500",
      price_suffix: "zł",
      period: "/ miesiąc",
      description: "Dla marek gotowych na szybki i mierzalny wzrost.",
      features: [
        "3 platformy (Instagram, TikTok, LinkedIn)",
        "24 posty miesięcznie + Stories",
        "Pełna strategia contentowa",
        "Reklamy płatne (do 2 000 zł budżetu)",
        "Dwutygodniowe raporty + call strategiczny",
        "Priorytetowa obsługa",
      ],
      cta: "Wybierz Growth",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Wycena",
      price_suffix: "",
      period: "indywidualna",
      description: "Dla dużych marek i agencji wymagających kompleksowej obsługi.",
      features: [
        "Nielimitowane platformy",
        "Dedykowany zespół kreatywny",
        "Produkcja wideo i zdjęć",
        "Kampanie influencer marketingu",
        "Tygodniowe raporty i spotkania",
        "SLA i dedykowany account manager",
      ],
      cta: "Skontaktuj się",
      highlighted: false,
    },
  ],
  contact_heading: "Gotowy na wzrost\nswojej marki?",
  contact_subtext: "Czy szukasz kompleksowej strategii social media, bieżącego zarządzania czy jednorazowej kampanii — porozmawiajmy.",
};

function getContentDir(collection: string): string {
  return path.join(process.cwd(), "content", collection);
}

export function getSiteContent(): SiteContent {
  const filePath = path.join(process.cwd(), "content", "pages", "home.md");
  if (!fs.existsSync(filePath)) return defaultContent;
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return { ...defaultContent, ...data } as SiteContent;
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
      thumbnail: data.thumbnail || data.image || undefined,
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
