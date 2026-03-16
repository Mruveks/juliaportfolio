/* Placeholder brand logos - replace text labels with <img> tags once you have real brand assets */
const brands = [
  { name: "Vogue Poland", abbr: "VP" },
  { name: "Reserved", abbr: "RE" },
  { name: "Allegro", abbr: "AL" },
  { name: "CCC Group", abbr: "CC" },
  { name: "Dior Beauty", abbr: "DB" },
  { name: "Empik", abbr: "EM" },
];

export default function Brands() {
  return (
    <section className="py-16 bg-[#EDE7DC] border-t border-b border-[#DDD6CB]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <p className="text-center text-xs font-semibold text-[#8A8078] uppercase tracking-[0.2em] mb-10">
          Zaufali mi
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200 group"
              title={brand.name}
            >
              {/* Logo placeholder - swap this div for <img src="..." alt={brand.name} /> */}
              <div className="w-14 h-14 rounded-2xl bg-[#DDD6CB] flex items-center justify-center">
                <span className="text-[#1A1714]/50 text-xs font-bold tracking-widest">{brand.abbr}</span>
              </div>
              <span className="text-[10px] text-[#1A1714]/40 tracking-wide text-center leading-tight hidden md:block">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
