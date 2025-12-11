/**
 * ESDEMA - Component Loader
 * Carga dinámica de header y footer en todas las páginas
 * @version 1.0.0
 */

(function() {
  'use strict';

  const ESDEMA_COMPONENTS = {
    config: {
      basePath: '',
      headerPath: '/components/header.html',
      footerPath: '/components/footer.html',
      cacheEnabled: true,
      cacheExpiry: 3600000 // 1 hora en milisegundos
    },

    cache: {},

    /**
     * Detecta la ruta base según la profundidad de la página actual
     */
    detectBasePath: function() {
      const path = window.location.pathname;
      const depth = (path.match(/\//g) || []).length - 1;

      if (depth <= 0 || path === '/' || path === '/index.html') {
        this.config.basePath = '';
      } else {
        this.config.basePath = '../'.repeat(depth);
      }

      // Para desarrollo local, ajustar rutas
      if (window.location.protocol === 'file:') {
        this.config.headerPath = this.config.basePath + 'components/header.html';
        this.config.footerPath = this.config.basePath + 'components/footer.html';
      }
    },

    /**
     * Obtiene contenido del cache local
     */
    getFromCache: function(key) {
      if (!this.config.cacheEnabled) return null;

      try {
        const cached = localStorage.getItem('esdema_' + key);
        if (cached) {
          const data = JSON.parse(cached);
          if (Date.now() - data.timestamp < this.config.cacheExpiry) {
            return data.content;
          }
        }
      } catch (e) {
        console.warn('Cache read error:', e);
      }
      return null;
    },

    /**
     * Guarda contenido en cache local
     */
    setToCache: function(key, content) {
      if (!this.config.cacheEnabled) return;

      try {
        localStorage.setItem('esdema_' + key, JSON.stringify({
          content: content,
          timestamp: Date.now()
        }));
      } catch (e) {
        console.warn('Cache write error:', e);
      }
    },

    /**
     * Carga un componente HTML
     */
    loadComponent: async function(url, targetSelector) {
      const target = document.querySelector(targetSelector);
      if (!target) {
        console.warn('Target element not found:', targetSelector);
        return false;
      }

      // Intentar obtener del cache primero
      const cacheKey = url.replace(/[^a-z0-9]/gi, '_');
      let html = this.getFromCache(cacheKey);

      if (!html) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
          }
          html = await response.text();
          this.setToCache(cacheKey, html);
        } catch (error) {
          console.error('Error loading component:', url, error);
          return false;
        }
      }

      // Ajustar rutas relativas según la profundidad de la página
      html = this.adjustPaths(html);

      target.innerHTML = html;
      return true;
    },

    /**
     * Ajusta las rutas en el HTML según la ubicación de la página
     */
    adjustPaths: function(html) {
      const basePath = this.config.basePath;

      if (!basePath) return html;

      // Ajustar rutas de href y src que empiezan con /
      html = html.replace(/href="\//g, 'href="' + basePath);
      html = html.replace(/src="\//g, 'src="' + basePath);

      return html;
    },

    /**
     * Marca el enlace activo en la navegación
     */
    setActiveNavLink: function() {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-link, .nav-dropdown-item');

      navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (!href) return;

        // Limpiar clases activas previas
        link.classList.remove('active');

        // Marcar como activo si coincide
        if (href === currentPath ||
            (href !== '/' && currentPath.startsWith(href)) ||
            (currentPath === '/' && href === '/') ||
            (currentPath === '/index.html' && href === '/')) {
          link.classList.add('active');
        }
      });
    },

    /**
     * Inicializa el menú móvil después de cargar el header
     */
    initMobileNav: function() {
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('nav-menu');

      if (!navToggle || !navMenu) return;

      navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');
      });

      // Cerrar menú al hacer clic fuera
      document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          document.body.classList.remove('nav-open');
        }
      });

      // Cerrar menú al hacer clic en un enlace
      navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          document.body.classList.remove('nav-open');
        });
      });
    },

    /**
     * Inicializa los dropdowns del header
     */
    initDropdowns: function() {
      const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

      dropdownToggles.forEach(function(toggle) {
        const dropdown = toggle.closest('.nav-dropdown');
        const menu = dropdown.querySelector('.nav-dropdown-menu');

        // Toggle en click para móvil
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

          // Cerrar otros dropdowns
          dropdownToggles.forEach(function(otherToggle) {
            if (otherToggle !== toggle) {
              otherToggle.setAttribute('aria-expanded', 'false');
              otherToggle.closest('.nav-dropdown').classList.remove('active');
            }
          });

          toggle.setAttribute('aria-expanded', !isExpanded);
          dropdown.classList.toggle('active');
        });

        // Hover para desktop
        if (window.matchMedia('(min-width: 769px)').matches) {
          dropdown.addEventListener('mouseenter', function() {
            toggle.setAttribute('aria-expanded', 'true');
            dropdown.classList.add('active');
          });

          dropdown.addEventListener('mouseleave', function() {
            toggle.setAttribute('aria-expanded', 'false');
            dropdown.classList.remove('active');
          });
        }
      });

      // Cerrar dropdowns al hacer clic fuera
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
          dropdownToggles.forEach(function(toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.closest('.nav-dropdown').classList.remove('active');
          });
        }
      });
    },

    /**
     * Inicializa el header sticky
     */
    initStickyHeader: function() {
      const header = document.querySelector('.header');
      if (!header) return;

      let lastScroll = 0;
      const scrollThreshold = 50;

      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Ocultar/mostrar header en scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
      }, { passive: true });
    },

    /**
     * Inicializa el botón de volver arriba
     */
    initBackToTop: function() {
      const backToTop = document.getElementById('back-to-top');
      if (!backToTop) return;

      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }, { passive: true });

      backToTop.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    },

    /**
     * Actualiza el año en el footer
     */
    updateYear: function() {
      const yearElement = document.getElementById('current-year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    },

    /**
     * Inicializa el formulario de newsletter
     */
    initNewsletter: function() {
      const form = document.querySelector('.footer-newsletter-form');
      if (!form) return;

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Aquí se integraría con el servicio de newsletter
        console.log('Newsletter subscription:', email);

        // Mostrar mensaje de éxito
        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.textContent = '¡Suscrito!';
        button.disabled = true;

        setTimeout(function() {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 3000);
      });
    },

    /**
     * Inicializa todos los componentes
     */
    init: async function() {
      this.detectBasePath();

      // Cargar header y footer en paralelo
      const headerLoaded = this.loadComponent(
        this.config.headerPath,
        '#esdema-header'
      );

      const footerLoaded = this.loadComponent(
        this.config.footerPath,
        '#esdema-footer'
      );

      // Esperar a que ambos se carguen
      await Promise.all([headerLoaded, footerLoaded]);

      // Inicializar funcionalidades después de cargar
      this.initMobileNav();
      this.initDropdowns();
      this.initStickyHeader();
      this.initBackToTop();
      this.setActiveNavLink();
      this.updateYear();
      this.initNewsletter();

      // Disparar evento personalizado
      document.dispatchEvent(new CustomEvent('esdema:components-loaded'));

      console.log('ESDEMA Components loaded successfully');
    }
  };

  // Iniciar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      ESDEMA_COMPONENTS.init();
    });
  } else {
    ESDEMA_COMPONENTS.init();
  }

  // Exponer globalmente para debug
  window.ESDEMA_COMPONENTS = ESDEMA_COMPONENTS;

})();
