"use client";

import { useState } from "react";
import { SiteContent } from "@/lib/content";
import { SectionHeader, FadeUp } from "@/components/ui/Animate";

const socialLinks = [
  {
    label: "Instagram", href: "https://instagram.com", handle: "@julia",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>),
  },
  {
    label: "TikTok", href: "https://tiktok.com", handle: "@julia",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.77a4.85 4.85 0 0 1-1-.08z" /></svg>),
  },
  {
    label: "LinkedIn", href: "https://linkedin.com", handle: "Julia",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>),
  },
];

// Sign up free at https://formspree.io → create a form → paste the ID here.
// Submissions are delivered directly to your email.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact({ content }: { content: SiteContent }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const headingLines = content.contact_heading.split("\\n");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) { setSubmitted(true); } else { setError(true); }
    } catch { setError(true); }
    finally { setSending(false); }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#E9E0D2] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-[#B5926A]/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-[340px] h-[340px] rounded-full border border-[#B5926A]/10 pointer-events-none" aria-hidden="true" />
      {/* Dot grid top-left */}
      <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #B5926A1A 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, black 30%, transparent 80%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Kontakt"
              heading={
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714] mb-8"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {headingLines[0]}
                  {headingLines[1] && <><br />{headingLines[1]}</>}
                </h2>
              }
              body={
                <div>
                  <p className="text-[#1A1714]/55 text-lg leading-relaxed mb-12">
                    {content.contact_subtext}
                  </p>

                  <FadeUp delay={100}>
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-12 h-12 rounded-full border border-[#DDD6CB] bg-[#FDFAF6] flex items-center justify-center text-[#B5926A]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <a href="mailto:julia.a.galecka@gmail.com" className="text-[#1A1714] hover:text-[#B5926A] transition-colors duration-200 text-lg">
                        julia.a.galecka@gmail.com
                      </a>
                    </div>
                  </FadeUp>

                  <div className="flex flex-col gap-4">
                    {socialLinks.map((s, i) => (
                      <FadeUp key={s.label} delay={200 + i * 80}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full border border-[#DDD6CB] bg-[#FDFAF6] flex items-center justify-center text-[#8A8078] group-hover:text-[#B5926A] group-hover:border-[#B5926A]/40 transition-all duration-200">
                            {s.icon}
                          </div>
                          <span className="text-[#1A1714]/50 group-hover:text-[#1A1714] transition-colors duration-200 text-sm">
                            {s.handle}<span className="text-[#1A1714]/30 ml-2">· {s.label}</span>
                          </span>
                        </a>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              }
            />
          </div>

          <FadeUp delay={200}>
            <div>
              {submitted ? (
                <div className="bg-[#FDFAF6] border border-[#DDD6CB] rounded-2xl p-10 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-[#B5926A]/15 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#B5926A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1714] text-2xl font-semibold mb-3">Wiadomość wysłana!</h3>
                  <p className="text-[#1A1714]/50">Dziękuję za kontakt. Odezwę się w ciągu 24 godzin.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-[#FDFAF6] rounded-2xl p-8 border border-[#DDD6CB] shadow-sm"
                >

                  <div>
                    <label htmlFor="name" className="block text-[#1A1714]/50 text-xs font-medium mb-2 uppercase tracking-wider">Twoje imię</label>
                    <input id="name" name="name" type="text" required placeholder="Jan Kowalski"
                      className="w-full bg-[#F3EDE3] border border-[#DDD6CB] rounded-xl px-5 py-4 text-[#1A1714] placeholder-[#1A1714]/25 focus:outline-none focus:border-[#B5926A]/60 focus:ring-1 focus:ring-[#B5926A]/30 transition-colors duration-200 text-base" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#1A1714]/50 text-xs font-medium mb-2 uppercase tracking-wider">Adres e-mail</label>
                    <input id="email" name="email" type="email" required placeholder="jan@firma.pl"
                      className="w-full bg-[#F3EDE3] border border-[#DDD6CB] rounded-xl px-5 py-4 text-[#1A1714] placeholder-[#1A1714]/25 focus:outline-none focus:border-[#B5926A]/60 focus:ring-1 focus:ring-[#B5926A]/30 transition-colors duration-200 text-base" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#1A1714]/50 text-xs font-medium mb-2 uppercase tracking-wider">Wiadomość</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Opowiedz mi o swojej marce i czego szukasz..."
                      className="w-full bg-[#F3EDE3] border border-[#DDD6CB] rounded-xl px-5 py-4 text-[#1A1714] placeholder-[#1A1714]/25 focus:outline-none focus:border-[#B5926A]/60 focus:ring-1 focus:ring-[#B5926A]/30 transition-colors duration-200 text-base resize-none" />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.</p>
                  )}

                  <button type="submit" disabled={sending}
                    className="w-full bg-[#B5926A] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#9A7A55] transition-all duration-200 hover:shadow-lg hover:shadow-[#B5926A]/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
                    {sending ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
