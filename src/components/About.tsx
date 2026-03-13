import Image from "next/image";

const skills = [
  {
    icon: "✦",
    title: "Content Strategy",
    desc: "Building content pillars and editorial calendars that align with brand goals and audience intent.",
  },
  {
    icon: "✦",
    title: "Instagram Growth",
    desc: "Organic and paid strategies to grow engaged followings and boost reach on Instagram.",
  },
  {
    icon: "✦",
    title: "TikTok Content",
    desc: "Trend-led, authentic TikTok content that captures attention and drives virality.",
  },
  {
    icon: "✦",
    title: "Analytics & Reporting",
    desc: "Data-driven insights and monthly reporting that prove ROI and guide strategy.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="block w-10 h-px bg-[#ff6b35]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#ff6b35] uppercase tracking-widest">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#f0ede8]">
              <Image
                src="/images/uploads/profile.jpg"
                alt="Julia Martinez — Social Media Manager"
                fill
                className="object-cover"
                loading="lazy"
              />
              {/* Placeholder overlay when no image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#0a0a0a]/20">
                  <svg
                    className="w-20 h-20 mx-auto mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-sm">Profile photo</p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] text-white rounded-2xl px-6 py-5 shadow-2xl hidden sm:block">
              <div className="text-3xl font-bold mb-1">5+ yrs</div>
              <div className="text-sm text-white/60">of social expertise</div>
            </div>

            {/* Accent decoration */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-[#ff6b35]/10 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text column */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[#0a0a0a] mb-6"
              style={{ fontFamily: "\"Playfair Display\", Georgia, serif" }}
            >
              The person behind
              <br />
              the strategy.
            </h2>
            <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-6">
              Hi, I&apos;m Julia — a Social Media Manager based in New York with 5+
              years of experience helping brands build meaningful online
              presences. I&apos;ve worked with startups, e-commerce brands, and
              global agencies to craft content that converts.
            </p>
            <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-12">
              I believe great social media is equal parts creative storytelling
              and smart strategy. Every post, caption, and campaign is an
              opportunity to connect and convert.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.title} className="group">
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className="text-[#ff6b35] mt-0.5 text-xs"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    <h3 className="font-semibold text-[#0a0a0a] text-sm">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-[#0a0a0a]/50 text-sm leading-relaxed pl-5">
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
