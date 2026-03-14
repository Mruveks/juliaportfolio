import Image from "next/image";

const skills = [
  {
    icon: "✦",
    title: "Strategia Treści",
    desc: "Budowanie filarów content i kalendarzy redakcyjnych spójnych z celami marki i intencjami odbiorców.",
  },
  {
    icon: "✦",
    title: "Wzrost na Instagramie",
    desc: "Organiczne i płatne strategie zwiększające zaangażowaną społeczność oraz zasięgi na Instagramie.",
  },
  {
    icon: "✦",
    title: "Treści TikTok",
    desc: "Autentyczne treści TikTok oparte na trendach, przyciągające uwagę i generujące viralowy zasięg.",
  },
  {
    icon: "✦",
    title: "Analityka i Raporty",
    desc: "Oparte na danych wnioski i miesięczne raporty udowadniające ROI i wyznaczające kierunek strategii.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="block w-10 h-px bg-[#B5926A]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#B5926A] uppercase tracking-widest">
            O mnie
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#F0EBE3]">
              <Image
                src="/images/uploads/profile.jpg"
                alt="Julia Martinez — Social Media Manager"
                fill
                className="object-cover"
                loading="lazy"
              />
              {/* Placeholder overlay when no image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#1A1714]/20">
                  <svg
                    className="w-20 h-20 mx-auto mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-sm">Zdjęcie profilowe</p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1A1714] text-white rounded-2xl px-6 py-5 shadow-2xl hidden sm:block">
              <div className="text-3xl font-bold mb-1">5+ lat</div>
              <div className="text-sm text-white/60">doświadczenia</div>
            </div>

            {/* Accent decoration */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#B5926A]/10 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text column */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Osoba stojąca
              <br />
              za strategią.
            </h2>
            <p className="text-[#1A1714]/60 text-lg leading-relaxed mb-6">
              Cześć, jestem Julia — Social Media Manager z Warszawy z ponad 5-letnim
              doświadczeniem w budowaniu silnych obecności marek w internecie.
              Pracowałam ze startupami, e-commercem i globalnymi agencjami, tworząc
              treści, które konwertują.
            </p>
            <p className="text-[#1A1714]/60 text-lg leading-relaxed mb-12">
              Uważam, że świetne social media to połączenie kreatywnego storytellingu
              i przemyślanej strategii. Każdy post, caption i kampania to szansa
              na nawiązanie relacji i konwersję.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.title} className="group">
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className="text-[#B5926A] mt-0.5 text-xs"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    <h3 className="font-semibold text-[#1A1714] text-sm">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-[#1A1714]/50 text-sm leading-relaxed pl-5">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
