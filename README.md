# All in One Maintenance — Website

A fast, conversion-focused marketing website for **All in One Maintenance**, a home,
business & property maintenance company based in Pretoria, South Africa.

> **We do it all, so you don't have to.** · One call. Every solution.

## What's inside

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Zero-friction lead conversion — hero CTAs, services, trust signals, social proof |
| About | `about.html` | Story-driven trust building, values, the team |
| Contact | `contact.html` | Tap-to-call / WhatsApp / email + a no-backend quote form |

Supporting files:

```
assets/
  css/styles.css     # full design system (brand colours, components, responsive)
  js/main.js         # nav, scroll reveals, back-to-top, quote form → WhatsApp/email
  img/sprite.svg     # icon + logo source (icons are also inlined per page)
  img/favicon.svg    # browser tab icon
```

## Design & conversion notes

- **Brand colours** taken from the company's logo & Canva site:
  industrial **charcoal/black**, **orange/amber `#F7941D`** accent, supporting **navy**.
- **Zero-friction conversion** is built in everywhere:
  - Sticky header "Free Quote" + click-to-call button
  - A persistent **mobile action bar** (Call / WhatsApp) fixed to the bottom on phones
  - Hero, mid-page and footer CTAs, plus a back-to-top button
- **The quote form needs no server.** On submit it composes a pre-filled
  **WhatsApp** message (to `066 216 9504`) or **email** (to `maintainallinone@gmail.com`).
- **No external image dependencies** — all icons/visuals are inline SVG + CSS, so the
  site looks great and loads fast even on poor connections. (Google Fonts loads from a
  CDN but falls back gracefully to system fonts.)
- Mobile-first, responsive, accessible (semantic HTML, focus states, reduced-motion support).

## Business details used

- **Phone (Michael Boshoff):** 083 659 6022
- **Call / WhatsApp:** 066 216 9504
- **Second contact (Xavier Raath):** 072 409 3097
- **Email:** maintainallinone@gmail.com
- **Area:** Pretoria & surrounds · **Hours:** Open 24/7
- **Facebook:** https://www.facebook.com/share/1Bbfotfu9D/

## Running locally

It's a static site — just open `index.html` in a browser. To preview exactly as
hosted, serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, cPanel…).

**GitHub Pages:** push to the repo, then in *Settings → Pages* set the source to the
branch root (`/`). A `.nojekyll` file is included so the `assets/` folder is served as-is.

## Things to update with real content

- **Testimonials** on the home page are placeholders — swap them for real Facebook/Google
  reviews when available (look for the `NOTE FOR THE OWNER` comment in `index.html`).
- Add real **before/after photos** of your work to boost trust & conversions further.
- If you get a custom domain, update the `og:` meta tags and add a `CNAME` file.
