import VisitCounter from "./VisitCounter";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "O mnie", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Pakiety", href: "#pricing" },
  { label: "Kontakt", href: "#contact" },
  { label: "Admin", href: "/admin" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1714] border-t border-white/5 py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="text-white font-semibold text-lg tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Julia <span className="text-[#B5926A]">Martinez</span>
          </a>

          <nav className="flex items-center flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/30 hover:text-white/70 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-end gap-1.5">
            <p className="text-sm text-white/20">© {currentYear} Julia Martinez</p>
            <VisitCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
