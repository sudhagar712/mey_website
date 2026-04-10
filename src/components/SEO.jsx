import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Sets per-page: title, description, keywords, canonical, og:*, twitter:*
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.mey.co.in/og-image.jpg',
  noIndex = false,
}) => {
  const location = useLocation();
  const siteUrl = 'https://www.mey.co.in';
  const pageUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // ── Title ──────────────────────────────────────
    if (title) document.title = title;

    const set = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        // determine if name, property, or http-equiv
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else if (selector.includes('name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel, value) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', value);
    };

    // ── Primary meta ───────────────────────────────
    if (description)  set('meta[name="description"]',  'content', description);
    if (keywords)     set('meta[name="keywords"]',      'content', keywords);
    set('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    // ── Canonical ──────────────────────────────────
    setLink('canonical', pageUrl);

    // ── Open Graph ─────────────────────────────────
    if (title)       set('meta[property="og:title"]',       'content', title);
    if (description) set('meta[property="og:description"]', 'content', description);
    set('meta[property="og:url"]',   'content', pageUrl);
    set('meta[property="og:image"]', 'content', ogImage);
    set('meta[property="og:type"]',  'content', 'website');
    set('meta[property="og:site_name"]', 'content', 'MEY');

    // ── Twitter Card ───────────────────────────────
    if (title)       set('meta[name="twitter:title"]',       'content', title);
    if (description) set('meta[name="twitter:description"]', 'content', description);
    set('meta[name="twitter:card"]',  'content', 'summary_large_image');
    set('meta[name="twitter:image"]', 'content', ogImage);

  }, [title, description, keywords, canonical, ogImage, noIndex, pageUrl]);

  return null;
};

export default SEO;
