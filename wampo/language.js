/* Locale selection is local-only: never infer language from country or IP. */
(function (root) {
  'use strict';
  const KEY = 'wampo-language';
  const valid = value => value === 'ja' || value === 'en';
  function resolveRoute(href, saved, languages = [], fallback = '') {
    const url = new URL(href);
    const match = url.pathname.match(/(?:^|\/)(index|support|privacy)(_ja)?\.html$/);
    const directory = url.pathname.endsWith('/');
    const explicit = url.searchParams.get('lang');
    const first = languages[0] || fallback || 'en';
    const locale = valid(explicit) ? explicit : valid(saved) ? saved : /^ja(?:-|$)/i.test(first) ? 'ja' : 'en';
    if (!match && !directory) return { locale, url: href, redirect: false };
    const filename = (match ? match[1] : 'index') + (locale === 'ja' ? '_ja' : '') + '.html';
    url.pathname = directory ? url.pathname + filename : url.pathname.replace(/[^/]+$/, filename);
    // English directory URLs already serve index.html; do not add a needless redirect.
    if (directory && locale === 'en') url.pathname = new URL(href).pathname;
    return { locale, url: url.href, redirect: url.href !== href };
  }
  function switchUrl(href, locale) {
    const url = new URL(href); url.searchParams.set('lang', locale);
    return resolveRoute(url.href, locale).url;
  }
  function boot(win) {
    let saved;
    try { saved = win.localStorage.getItem(KEY); } catch (_) { /* blocked storage */ }
    const explicit = new URL(win.location.href).searchParams.get('lang');
    if (valid(explicit)) { try { win.localStorage.setItem(KEY, explicit); } catch (_) {} }
    const result = resolveRoute(win.location.href, saved, win.navigator.languages || [], win.navigator.language);
    if (result.redirect) win.location.replace(result.url);
    if (win.document) win.document.addEventListener('DOMContentLoaded', () => {
      // Keep an explicit choice through local navigation even if storage is blocked.
      if (valid(explicit)) win.document.querySelectorAll('a[href]').forEach(link => {
        const target = new URL(link.href, win.location.href);
        if (target.origin === new URL(win.location.href).origin && /\/(index|support|privacy)(_ja)?\.html$/.test(target.pathname) && !link.hasAttribute('data-language')) {
          link.href = switchUrl(target.href, explicit);
        }
      });
      win.document.querySelectorAll('[data-language]').forEach(link => {
        const locale = link.getAttribute('data-language');
        link.href = switchUrl(win.location.href, locale);
        link.addEventListener('click', () => { try { win.localStorage.setItem(KEY, locale); } catch (_) {} });
      });
    });
    return result;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { resolveRoute, switchUrl, boot };
  else boot(root);
})(typeof window !== 'undefined' ? window : globalThis);
