/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.uniones-para-siempre.com/",
  generateRobotsTxt: true, // (optional)
  outDir: "./out",
  // ...other options
};
