import Image from "next/image";
import { SectionHeader, FadeUp } from "@/components/ui/Animate";
import { SiteContent } from "@/lib/content";

export default function About({ content }: { content: SiteContent }) {
  const headingLines = content.about_heading.split("\\n");

  return (
    <section id="about" className="py-24 md:py-32 bg-[#EDE7DC] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full border border-[#B5926A]/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full border border-[#B5926A]/8 pointer-events-none" aria-hidden="true" />
      {/* Dot grid bottom-right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #B5926A20 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 100%, black 30%, transparent 80%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="relative aspect-5/5 lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#E4DDD2]">
                <Image
                  src="/images/uploads/profile.jpg"
                  alt="Julia - Social Media Manager"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#1A1714]/20">
                    <svg className="w-20 h-20 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                    <p className="text-sm">Zdjęcie profilowe</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1A1714] text-white rounded-2xl px-6 py-5 shadow-2xl hidden sm:block">
                <div className="text-3xl font-bold mb-1">{content.hero_stat_years}</div>
                <div className="text-sm text-white/60">{content.hero_stat_years_label}</div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#B5926A]/15 -z-10" aria-hidden="true" />
            </div>
          </FadeUp>

          <div>
            <SectionHeader
              eyebrow="O mnie"
              heading={
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714] mb-6"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {headingLines[0]}
                  {headingLines[1] && <><br />{headingLines[1]}</>}
                </h2>
              }
              body={
                <div>
                  <p className="text-[#1A1714]/60 text-lg leading-relaxed mb-6">
                    {content.about_bio_1}
                  </p>
                  <p className="text-[#1A1714]/60 text-lg leading-relaxed mb-12">
                    {content.about_bio_2}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.skills.map((skill, i) => (
                      <FadeUp key={skill.title} delay={i * 80}>
                        <div>
                          <div className="flex items-start gap-3 mb-2">
                            <span className="text-[#B5926A] mt-0.5 text-xs" aria-hidden="true">✦</span>
                            <h3 className="font-semibold text-[#1A1714] text-sm">{skill.title}</h3>
                          </div>
                          <p className="text-[#1A1714]/50 text-sm leading-relaxed pl-5">{skill.desc}</p>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
