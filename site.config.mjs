/**
 * ============================================================================
 *  BLUESTEM — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://bluestem.kevin-c4h.workers.dev', // no trailing slash — confirm after first Cloudflare deploy
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Bluestem',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed name is registered (Cook County Clerk, or Illinois Secretary of State for an LLC/corporation)
    owner: null, // optional
    foundingYear: null,

    phone: '(872) 278-5851',
    phoneE164: '+18722785851',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '1918 N Mendell St', // real, staffed office — add suite if any
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60642',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Chicago, IL'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Central Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  /**
   * Contact form — submissions are POSTed to an n8n Webhook (production URL,
   * https://…/webhook/…). The n8n workflow routes them (email, sheet, CRM) and
   * should answer with a redirect to `redirect_to` (the /thank-you/ page).
   * Until webhookUrl is set, the form shows a "not connected yet" notice and won't send.
   * See docs/N8N-FORM-SETUP.md.
   */
  form: { name: 'consultation', provider: 'n8n', webhookUrl: null },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Slow-zoom photo hero (no verified Chicago video matched the brand).
    // Pexels photo 34506537 — Chicago skyline at sunset from Lake Michigan (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      prairie: { src: '/assets/media/prairie.webp', pos: '50% 60%', alt: 'Tall prairie grass glowing at sunset' },
      skyline: { src: '/assets/media/skyline.webp', pos: '55% 50%', alt: 'Chicago skyline across Lake Michigan' },
      grass: { src: '/assets/media/grass.webp', pos: '55% 50%', alt: 'Prairie grass silhouetted against an evening sky' },
    },
  },
};
