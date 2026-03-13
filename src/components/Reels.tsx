import Image from "next/image";
import { ReelItem } from "@/lib/content";

function ReelCard({ reel }: { reel: ReelItem }) {
  // Detect if it's an embeddable URL
  const isEmbed =
    reel.videoUrl.includes("youtube.com/embed") ||
    reel.videoUrl.includes("youtu.be") ||
    reel.videoUrl.includes("vimeo.com");

  const isDirectVideo =
    reel.videoUrl.endsWith(".mp4") ||
    reel.videoUrl.endsWith(".webm") ||
    reel.videoUrl.endsWith(".mov");

  return (
    <article className="group relative flex flex-col">
      {/* Video container — 9:16 aspect ratio */}
      <div className="relative w-full aspect-[9/16] bg-[#0a0a0a] rounded-2xl overflow-hidden">
        {isEmbed ? (
          <iframe
            src={reel.videoUrl}
            title={reel.title}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : isDirectVideo ? (
          <video
            src={reel.videoUrl}
            poster={reel.thumbnail}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
            onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
          />
        ) : reel.thumbnail ? (
          <Image
            src={reel.thumbnail}
            alt={reel.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
            <div className="text-center text-white/20">
              <svg
                className="w-10 h-10 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-xs">Reel</p>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="video-overlay pointer-events-none" aria-hidden="true" />

        {/* Play button overlay (shown on non-iframe) */}
        {!isEmbed && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <svg
                className="w-6 h-6 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-white font-semibold text-sm leading-tight">
            {reel.title}
          </h3>
          {reel.description && (
            <p className="text-white/60 text-xs mt-1 line-clamp-2">
              {reel.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Reels({ items }: { items: ReelItem[] }) {
  return (
    <section id="reels" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#ff6b35]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#ff6b35] uppercase tracking-widest">
            Reels
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight text-[#0a0a0a]"
            style={{ fontFamily: "\"Playfair Display\", Georgia, serif" }}
          >
            Reel portfolio.
          </h2>
          <p className="text-[#0a0a0a]/50 text-base max-w-sm leading-relaxed">
            Short-form video content crafted for maximum engagement and
            reach.
          </p>
        </div>

        {/* Vertical video grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((reel) => (
              <ReelCard key={reel.slug} reel={reel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#0a0a0a]/30">
            <p>Reels will appear here once added via the CMS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
