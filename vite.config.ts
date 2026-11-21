import { defineConfig, type Plugin } from "vite";

// Content Security Policy, see docs/adr/0004-securite-du-contenu.md.
// Applied to the production build only: the dev server needs inline scripts and websockets.
const contentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' https:",
  "connect-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
].join("; ");

function injectContentSecurityPolicy(): Plugin {
  return {
    name: "wiki3:content-security-policy",
    apply: "build",
    transformIndexHtml: () => [
      {
        tag: "meta",
        attrs: { "http-equiv": "Content-Security-Policy", content: contentSecurityPolicy },
        injectTo: "head-prepend",
      },
    ],
  };
}

export default defineConfig({
  plugins: [injectContentSecurityPolicy()],
  preview: { port: 4173, strictPort: true },
});
