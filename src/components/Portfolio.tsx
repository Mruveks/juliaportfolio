import Image from "next/image";
import { PortfolioItem } from "@/lib/content";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5e5e3] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0a0a0a]/10">
      {/* Media */}
      <div className="relative aspect-[4/3] bg-[#f0ede8] overflow-hidden">
        {item.videoUrl ? (
          <iframe
            src={item.videoUrl}
            title={item.title}
            className="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#0a0a0a]/20">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-xs">Project image</p>
            </div>
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#0a0a0a]/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-[#0a0a0a]/55 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Portfolio({
  items,
}: {
  items: PortfolioItem[];
}) {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#fafaf8]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#ff6b35]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#ff6b35] uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight text-[#0a0a0a]"
            style={{ fontFamily: "\"Playfair Display\", Georgia, serif" }}
          >
            Selected work.
          </h2>
          <p className="text-[#0a0a0a]/50 text-base max-w-sm leading-relaxed">
            A curated selection of campaigns, strategies, and content that
            delivered real results.
          </p>
        </div>

        {/* Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#0a0a0a]/30">
            <p>Portfolio items will appear here once added via the CMS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
