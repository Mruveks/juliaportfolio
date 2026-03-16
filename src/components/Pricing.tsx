import { SiteContent } from "@/lib/content";
import { FadeUp, SectionHeader } from "@/components/ui/Animate";

export default function Pricing({ content }: { content: SiteContent }) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F3EDE3]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Pakiety"
          heading={
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714]"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Przejrzyste pakiety.
              </h2>
              <p className="text-[#1A1714]/50 text-base max-w-sm leading-relaxed">
                Bez ukrytych kosztów. Wybierz pakiet dopasowany do skali Twojej marki.
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.pricing.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-8 flex flex-col h-full border transition-shadow duration-300 hover:shadow-xl ${
                  plan.highlighted
                    ? "bg-[#1A1714] border-[#1A1714] text-white"
                    : "bg-[#FDFAF6] border-[#DDD6CB]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#B5926A] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                      Najpopularniejszy
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-[#1A1714]"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#1A1714]"}`}
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {plan.price}
                    </span>
                    {plan.price_suffix && (
                      <span className={`text-sm ${plan.highlighted ? "text-white/50" : "text-[#8A8078]"}`}>
                        {plan.price_suffix}
                      </span>
                    )}
                    <span className={`text-sm ml-1 ${plan.highlighted ? "text-white/50" : "text-[#8A8078]"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/60" : "text-[#1A1714]/55"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#B5926A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? "text-white/80" : "text-[#1A1714]/65"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-[#B5926A] text-white hover:bg-[#9A7A55] hover:shadow-lg hover:shadow-[#B5926A]/25"
                      : "border border-[#DDD6CB] text-[#1A1714] hover:border-[#B5926A] hover:text-[#B5926A]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        <p className="text-center text-sm text-[#8A8078] mt-8">
          Wszystkie ceny netto. Potrzebujesz czegoś innego?{" "}
          <a href="#contact" className="text-[#B5926A] hover:underline">Napisz do mnie</a> - chętnie przygotuję indywidualną ofertę.
        </p>
      </div>
    </section>
  );
}
