const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://www.uniones-para-siempre.com",
  pagesDirectory: path.resolve(__dirname, "pages"),
  targetDirectory: "public/",
  ignoredExtensions: ["png", "jpg"],
  ignoredPaths: ["[fallback]", "_app", "[...slug]"], // Exclude everything that isn't static
});

console.log(`✅ sitemap.xml generated!`);
