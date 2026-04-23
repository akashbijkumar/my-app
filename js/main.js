(function () {
  "use strict";

  var header = document.getElementById("header");
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var yearEl = document.getElementById("year");
  var revealEls = document.querySelectorAll(
    ".section-header, .hero-copy, .hero-card, .highlight-card, .about-grid, .journey-step, .stay-grid, .crew-card, .package-card, .location-grid, .testimonial, .gallery-item, .faq-item, .contact-center"
  );

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function toggleHeaderShadow() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function lockPageScroll(locked) {
    document.documentElement.style.overflow = locked ? "hidden" : "";
    document.body.style.overflow = locked ? "hidden" : "";
  }

  function openNav() {
    if (!mainNav || !navToggle) {
      return;
    }

    mainNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    lockPageScroll(true);
  }

  function closeNav() {
    if (!mainNav || !navToggle) {
      return;
    }

    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    lockPageScroll(false);
  }

  function isDesktopNav() {
    return window.matchMedia("(min-width: 980px)").matches;
  }

  function syncNavMode() {
    if (isDesktopNav()) {
      lockPageScroll(false);
      if (mainNav) {
        mainNav.classList.remove("is-open");
      }
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  }

  window.addEventListener("scroll", toggleHeaderShadow, { passive: true });
  window.addEventListener("resize", syncNavMode, { passive: true });
  toggleHeaderShadow();
  syncNavMode();

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.contains("is-open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!isDesktopNav()) {
          closeNav();
        }
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
        closeNav();
      }
    });
  }

  function revealEl(el) {
    el.classList.add("is-visible");
  }

  var observerOptions = {
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.1
  };

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealEl(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      observerOptions
    );

    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("reveal", "is-visible");
    });
  }
})();
