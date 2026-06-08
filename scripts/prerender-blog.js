import fs from "fs";
import path from "path";
import { blogPosts, SITE_URL } from "./blog-posts.js";

// This is a Vite SPA, so every route serves the same index.html and shares its
// meta tags. Social scrapers don't run JS, so per-route tags must be baked into
// static HTML at build time. For each post we copy the built index.html, swap in
// post-specific title/description/OG/Twitter tags, and write it to
// dist/blog/<slug>.html. vercel.json points the post URL at that file.
const distDir = "./dist";
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setTitle(html, value) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(value)}</title>`);
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"[^>]*\\scontent=")[\\s\\S]*?(")`, "i");
  if (!re.test(html)) {
    console.warn(`⚠️  Could not find meta ${attr}="${key}" — skipping`);
    return html;
  }
  return html.replace(re, `$1${escapeAttr(value)}$2`);
}

for (const post of blogPosts) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  let html = template;
  html = setTitle(html, `${post.title} — Evan Johnson`);
  html = setMeta(html, "name", "description", post.description);
  html = setMeta(html, "property", "og:title", post.title);
  html = setMeta(html, "property", "og:description", post.description);
  html = setMeta(html, "property", "og:type", "article");
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "name", "twitter:title", post.title);
  html = setMeta(html, "name", "twitter:description", post.description);
  html = setMeta(html, "name", "twitter:image", image);

  const outPath = path.join(distDir, "blog", `${post.slug}.html`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`✅ Prerendered ${outPath}`);
}
