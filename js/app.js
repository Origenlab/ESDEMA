/**
 * ESDEMA - Directorio de Escuelas de Manejo
 * Main JavaScript Application
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const searchInput = document.querySelector('.search-input');
  const faqItems = document.querySelectorAll('.faq-item');

  /**
   * Mobile Navigation Toggle
   */
  function initMobileNav() {
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  /**
   * Sticky Header with Background Change on Scroll
   */
  function initStickyHeader() {
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add/remove scrolled class
      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Optional: Hide header on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * FAQ Accordion - Only One Open at a Time (Optional)
   */
  function initFaqAccordion() {
    if (!faqItems.length) return;

    faqItems.forEach(function(item) {
      item.addEventListener('toggle', function() {
        if (this.open) {
          // Close other open items (optional - remove if you want multiple open)
          faqItems.forEach(function(otherItem) {
            if (otherItem !== item && otherItem.open) {
              otherItem.open = false;
            }
          });
        }
      });
    });
  }

  /**
   * Animated Counter for Stats
   */
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = counter.getAttribute('data-count');

          if (target) {
            animateCounter(counter, parseInt(target, 10));
          }

          observer.unobserve(counter);
        }
      });
    }, observerOptions);

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (target - start) * easeOutQuart);

      if (target >= 1000) {
        element.textContent = formatNumber(current) + '+';
      } else {
        element.textContent = current + (target > 100 ? '+' : '');
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  function formatNumber(num) {
    if (num >= 1000) {
      return Math.floor(num / 1000) + 'K';
    }
    return num;
  }

  /**
   * Search Input Focus Enhancement
   */
  function initSearchEnhancements() {
    if (!searchInput) return;

    const searchBox = searchInput.closest('.search-box');

    searchInput.addEventListener('focus', function() {
      if (searchBox) {
        searchBox.classList.add('focused');
      }
    });

    searchInput.addEventListener('blur', function() {
      if (searchBox) {
        searchBox.classList.remove('focused');
      }
    });
  }

  /**
   * Lazy Loading Images (Native with Fallback)
   */
  function initLazyLoading() {
    // Native lazy loading is already implemented via HTML attribute
    // This is a fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
      return; // Native lazy loading supported
    }

    // Fallback for older browsers
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Form Validation for Search
   */
  function initFormValidation() {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm) return;

    searchForm.addEventListener('submit', function(e) {
      const searchInput = this.querySelector('.search-input');
      const estadoSelect = this.querySelector('.search-select');

      // Allow empty search (will show all results)
      // But if there's input, trim it
      if (searchInput && searchInput.value) {
        searchInput.value = searchInput.value.trim();
      }

      // Track search event (placeholder for analytics)
      trackEvent('search', {
        query: searchInput ? searchInput.value : '',
        estado: estadoSelect ? estadoSelect.value : ''
      });
    });
  }

  /**
   * Analytics Event Tracking (Placeholder)
   */
  function trackEvent(eventName, eventData) {
    // Placeholder for Google Analytics or other tracking
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventData);
    }

    // Console log for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Track Event:', eventName, eventData);
    }
  }

  /**
   * WhatsApp Link Click Tracking
   */
  function initWhatsAppTracking() {
    document.querySelectorAll('a[href^="https://wa.me"]').forEach(function(link) {
      link.addEventListener('click', function() {
        const schoolName = this.closest('.school-card')?.querySelector('.school-name a')?.textContent || 'Unknown';
        trackEvent('whatsapp_click', {
          school_name: schoolName,
          source: 'school_card'
        });
      });
    });
  }

  /**
   * Scroll to Top on Logo Click
   */
  function initScrollToTop() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    logo.addEventListener('click', function(e) {
      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  /**
   * Accessibility: Reduce Motion
   */
  function checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }

  /**
   * Initialize All Functions
   */
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    checkReducedMotion();
    initMobileNav();
    initStickyHeader();
    initSmoothScroll();
    initFaqAccordion();
    initCounterAnimation();
    initSearchEnhancements();
    initLazyLoading();
    initFormValidation();
    initWhatsAppTracking();
    initScrollToTop();

    // Log initialization in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('ESDEMA App Initialized');
    }
  }

  // Start the application
  init();

})();
