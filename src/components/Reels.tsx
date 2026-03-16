import Image from "next/image";
import { ReelItem } from "@/lib/content";
import { FadeUp } from "@/components/ui/Animate";
import { Carousel } from "@/components/ui/Carousel";

function ReelCard({ reel }: { reel: ReelItem }) {
  const isEmbed =
    reel.videoUrl.includes("youtube.com/embed") ||
    reel.videoUrl.includes("youtu.be") ||
    reel.videoUrl.includes("vimeo.com") ||
    reel.videoUrl.includes("tiktok.com");
  const isDirectVideo =
    reel.videoUrl.endsWith(".mp4") || reel.videoUrl.endsWith(".webm") || reel.videoUrl.endsWith(".mov");

  const inner = (
    <article className="group relative flex flex-col cursor-pointer">
      <div
        className="relative bg-[#1A1714] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-[#1A1714]/20"
        style={{ width: "100%", aspectRatio: "9/16" }}
      >
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2520] to-[#1A1714]">
            <div className="text-center text-white/20">
              <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-xs">Reel</p>
            </div>
          </div>
        )}

        {!isEmbed && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        <div className="video-overlay pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-white font-semibold text-sm leading-tight">{reel.title}</h3>
          {reel.description && (
            <p className="text-white/60 text-xs mt-1 line-clamp-2">{reel.description}</p>
          )}
        </div>
      </div>
    </article>
  );

  return !isEmbed ? (
    <a href={reel.videoUrl} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : inner;
}

export default function Reels({ items }: { items: ReelItem[] }) {
  return (
    <section id="reels" className="py-24 md:py-32 bg-[#EDE7DC] relative overflow-hidden">
      {/* Subtle diagonal stripe pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 18px,
            lightgray 18px,
            #B5926A0C 19px
          )`,
        }}
      />
      {/* Decorative rings (matching hero style) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[380px] h-[380px] rounded-full border border-black pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">
        <FadeUp>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#B5926A]" aria-hidden="true" />
            <span className="text-sm font-medium text-[#B5926A] uppercase tracking-widest">Reels</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Portfolio wideo.
            </h2>
            <p className="text-[#1A1714]/50 text-base max-w-sm leading-relaxed">
              Krótkie formy wideo tworzone z myślą o maksymalnym zaangażowaniu.
            </p>
          </div>
        </FadeUp>

        {items.length > 0 ? (
          <Carousel>
            {items.map((reel) => (
              <div
                key={reel.slug}
                className="shrink-0"
                style={{ width: "clamp(180px, 40vw, 240px)", scrollSnapAlign: "start" }}
              >
                <ReelCard reel={reel} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="text-center py-20 text-[#1A1714]/30">
            <p>Reels pojawią się tutaj po dodaniu przez CMS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
