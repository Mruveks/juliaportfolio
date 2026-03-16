import { SiteContent } from "@/lib/content";
import { FadeUp, SectionHeader } from "@/components/ui/Animate";

export default function Testimonials({ content }: { content: SiteContent }) {
  return (
    <section className="py-24 md:py-32 bg-[#1A1714] relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#B5926A]/10 pointer-events-none" aria-hidden="true" />
      {/* Gold dot grid top-left */}
      <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #B5926A22 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 80%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">
        <SectionHeader
          eyebrow="Opinie"
          heading={
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-white mb-16"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Co mówią klienci.
            </h2>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full backdrop-blur-sm hover:bg-white/8 transition-colors duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#B5926A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/70 text-base leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B5926A]/20 flex items-center justify-center text-[#B5926A] text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
