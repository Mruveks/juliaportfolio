import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.77a4.85 4.85 0 0 1-1-.08z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F3EDE3]">
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #B5926A 0%, transparent 65%)", transform: "translate(25%, -20%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #B5926A 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-24 pb-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

          {/* LEFT */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#B5926A]" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#B5926A] uppercase tracking-[0.18em]">
                Social Media Manager
              </span>
            </div>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.0] tracking-tight text-[#1A1714] mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Julia
              <br />
              <span className="text-[#B5926A]">Martinez</span>
            </h1>

            <p className="text-lg md:text-xl text-[#1A1714]/55 mb-10 leading-relaxed max-w-md">
              Pomagam markom rosnąć w mediach społecznościowych poprzez
              przemyślaną strategię, angażujące treści i realne wyniki.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#B5926A] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#9A7A55] transition-all duration-200 hover:shadow-lg hover:shadow-[#B5926A]/25 hover:-translate-y-0.5"
              >
                Współpracuj ze mną
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-[#1A1714]/20 text-[#1A1714] px-8 py-4 rounded-full text-sm font-medium hover:border-[#B5926A] hover:text-[#B5926A] transition-all duration-200 hover:-translate-y-0.5"
              >
                Zobacz moje prace
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#1A1714]/35 mr-2 tracking-wide">Znajdź mnie</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#DDD6CB] text-[#1A1714]/40 hover:text-[#B5926A] hover:border-[#B5926A]/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-[#DDD6CB]" aria-hidden="true" />
            <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-[#B5926A]/15" aria-hidden="true" />

            <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[470px] rounded-[2.5rem] overflow-hidden bg-[#E4DDD2] shadow-2xl shadow-[#B5926A]/10">
              <Image
                src="/images/uploads/profile.jpg"
                alt="Julia Martinez — Social Media Manager"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1A1714]/20">
                <svg className="w-20 h-20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <p className="text-sm font-medium">Zdjęcie profilowe</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(228,221,210,0.4) 0%, transparent 100%)" }} aria-hidden="true" />
            </div>

            <div className="absolute -bottom-2 -left-2 md:left-0 bg-[#FDFAF6] border border-[#DDD6CB] rounded-2xl px-5 py-4 shadow-lg shadow-[#1A1714]/5">
              <div className="text-2xl font-bold text-[#1A1714] mb-0.5">5+ lat</div>
              <div className="text-xs text-[#8A8078] tracking-wide">doświadczenia</div>
            </div>
            <div className="absolute -top-2 -right-2 md:right-0 bg-[#B5926A] rounded-2xl px-5 py-4 shadow-lg shadow-[#B5926A]/20">
              <div className="text-2xl font-bold text-white mb-0.5">50+</div>
              <div className="text-xs text-white/70 tracking-wide">marek</div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#1A1714]">Przewiń</span>
        <div className="w-px h-10 bg-[#1A1714] animate-pulse" />
      </div>
    </section>
  );
}
