import { SiteContent } from "@/lib/content";
import { FadeUp, SectionHeader } from "@/components/ui/Animate";

export default function Testimonials({ content }: { content: SiteContent }) {
  return (
    <section className="py-24 md:py-32 bg-[#EDE7DC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Opinie"
          heading={
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714] mb-16"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Co mówią klienci.
            </h2>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-[#FDFAF6] border border-[#DDD6CB] rounded-2xl p-8 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#B5926A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[#1A1714]/70 text-base leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B5926A]/20 flex items-center justify-center text-[#B5926A] text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1714]">{t.name}</p>
                    <p className="text-xs text-[#8A8078]">{t.role} · {t.company}</p>
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
