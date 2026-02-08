/* Calorithm — Main JavaScript */

(function () {
  'use strict';

  /* --- IntersectionObserver: fade-in on scroll --- */
  function initFadeIn() {
    var targets = document.querySelectorAll('.fade-in');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* --- Hamburger menu toggle --- */
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.querySelector('.mobile-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Smooth scroll for anchor links (fallback) --- */
  function initSmoothScroll() {
    if ('scrollBehavior' in document.documentElement.style) return;

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* --- FAQ Accordion toggle --- */
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-accordion-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!btn || !answer) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
  }

  /* --- Analytics: custom event tracking --- */
  function logEvent(eventName, params) {
    if (window.calorithmAnalytics) {
      window.calorithmAnalytics.logEvent(eventName, params);
    }
  }

  function initAnalyticsTracking() {
    var lang = document.documentElement.lang || 'en';

    // CTA clicks (App Store badges)
    var ctaLinks = document.querySelectorAll('.app-store-badge');
    var locations = ['hero', 'mid', 'bottom'];
    ctaLinks.forEach(function (link, index) {
      link.addEventListener('click', function () {
        logEvent('cta_click', {
          location: locations[index] || 'unknown',
          page_language: lang
        });
      });
    });

    // Language switch clicks
    document.querySelectorAll('.lang-link').forEach(function (link) {
      link.addEventListener('click', function () {
        logEvent('language_switch', {
          from_language: lang,
          to_language: lang === 'ja' ? 'en' : 'ja'
        });
      });
    });

    // FAQ accordion opens
    document.querySelectorAll('.faq-accordion-item').forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      if (!btn) return;
      btn.addEventListener('click', function () {
        // initFaqAccordion toggles is-open before this handler fires
        if (item.classList.contains('is-open')) {
          logEvent('faq_open', {
            question: btn.textContent.trim().substring(0, 100)
          });
        }
      });
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initFadeIn();
    initMobileMenu();
    initSmoothScroll();
    initFaqAccordion();
    initAnalyticsTracking();
  });
})();
