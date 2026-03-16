import Image from "next/image";
import { PortfolioItem } from "@/lib/content";
import { FadeUp, SectionHeader } from "@/components/ui/Animate";

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const isEmbed =
    (item.videoUrl?.includes("youtube.com/embed") ||
     item.videoUrl?.includes("youtu.be") ||
     item.videoUrl?.includes("vimeo.com")) ?? false;

  const isDirectVideo =
    (item.videoUrl?.endsWith(".mp4") ||
     item.videoUrl?.endsWith(".webm") ||
     item.videoUrl?.endsWith(".mov")) ?? false;

  const thumb = item.thumbnail || item.image;

  return (
    <FadeUp delay={index * 80}>
      <article className="group relative flex flex-col">
        {/* Video container - 9:16 aspect ratio */}
        <div className="relative w-full aspect-[9/16] bg-[#1A1714] rounded-2xl overflow-hidden">
          {/* Category badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-[#B5926A] text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {item.category}
            </span>
          </div>

          {isEmbed ? (
            <iframe
              src={item.videoUrl}
              title={item.title}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isDirectVideo ? (
            <video
              src={item.videoUrl}
              poster={thumb}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
              onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
            />
          ) : thumb ? (
            <Image
              src={thumb}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2520] to-[#1A1714]">
              <div className="text-center text-white/20">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-xs">Portfolio</p>
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="video-overlay pointer-events-none" aria-hidden="true" />

          {/* Play button overlay */}
          {!isEmbed && item.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Bottom overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
            {item.description && (
              <p className="text-white/60 text-xs mt-1 line-clamp-2">{item.description}</p>
            )}
          </div>
        </div>
      </article>
    </FadeUp>
  );
}

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F3EDE3]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Portfolio"
          heading={
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714]"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Wybrane realizacje.
              </h2>
              <p className="text-[#1A1714]/50 text-base max-w-sm leading-relaxed">
                Starannie dobrane kampanie, strategie i treści, które przyniosły realne rezultaty.
              </p>
            </div>
          }
        />

        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((item, i) => (
              <PortfolioCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#1A1714]/30">
            <p>Elementy portfolio pojawią się tutaj po dodaniu przez CMS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
