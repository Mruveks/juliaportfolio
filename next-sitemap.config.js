/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://juliamartinez.co",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "out",
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin/"] },
    ],
    additionalSitemaps: [],
  },
};
