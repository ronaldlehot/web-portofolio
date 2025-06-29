// Ensure no conflicts with other libraries
(function () {
  "use strict";

  // for active link click and smooth scrolling
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if (!navLinks.length) {
      console.warn("No navigation links found");
      return;
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        // Add active class to clicked link
        this.classList.add("active");

        // Get target section
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Calculate offset for fixed navbar
          const navbar = document.querySelector(".navbar");
          const navbarHeight = navbar ? navbar.offsetHeight : 70;
          const targetPosition = targetSection.offsetTop - navbarHeight - 20;

          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }

        // Close mobile menu when link is clicked
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const toggleBtn = document.querySelector(".navbar-toggler");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
          if (toggleBtn) {
            toggleBtn.classList.remove("is-active");
            toggleBtn.setAttribute("aria-expanded", "false");
          }
        }
      });
    });

    // Update active link on scroll
    window.addEventListener("scroll", function () {
      try {
        const sections = document.querySelectorAll("section[id]");
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - navbarHeight - 100;
          const sectionHeight = section.offsetHeight;

          if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      } catch (error) {
        console.warn("Error in scroll handler:", error);
      }
    });
  });

  // Mobile menu toggle with Bootstrap 5
  const toggleMenu = document.querySelector(".navbar-toggler");

  // Enhanced mobile menu function
  const mobileMenu = () => {
    if (toggleMenu) {
      toggleMenu.classList.toggle("is-active");
    }
  };

  if (toggleMenu) {
    toggleMenu.addEventListener("click", mobileMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      const navbar = document.querySelector(".navbar");

      if (
        navbar &&
        navbarCollapse &&
        !navbar.contains(event.target) &&
        navbarCollapse.classList.contains("show")
      ) {
        toggleMenu.classList.remove("is-active");
        navbarCollapse.classList.remove("show");
        toggleMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Mobile touch improvements
  if ("ontouchstart" in window) {
    // Add touch class for mobile-specific styling
    document.body.classList.add("touch-device");

    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener(
      "touchend",
      function (event) {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
  }
})();

// GSAP animations with error handling
(function () {
  "use strict";

  // Check if GSAP is loaded before running animations
  if (typeof gsap === "undefined") {
    console.warn("GSAP library not loaded, skipping animations");
    return;
  }

  try {
    // scroll trigger
    gsap.registerPlugin(ScrollTrigger);

    // gsap animation
    // navbar
    gsap.from(".navbar-brand, .navbar-toggler", {
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      y: 10,
    });
    gsap.from(".nav-item", {
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      y: 30,
      stagger: 0.2,
    });

    // home page
    gsap.from(".home_photo", {
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      x: -100,
    });
    gsap.from(".home_intro h1", {
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      x: 100,
    });
    gsap.from(".home_intro h2", {
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      x: 100,
    });
    gsap.from(".home_intro p", {
      opacity: 0,
      duration: 0.6,
      delay: 0.7,
      x: 100,
    });
    gsap.from(".home_social a", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: 0.2,
    });

    // project
    gsap.from(".project h1", {
      scrollTrigger: ".project h1",
      opacity: 0,
      duration: 1,
      delay: 1,
      x: -30,
    });
    gsap.from(".project .line", {
      scrollTrigger: ".project .line",
      opacity: 0,
      duration: 1,
      delay: 1,
      y: -30,
    });
    gsap.from(".foodApp img", {
      scrollTrigger: ".foodApp img",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      x: 100,
    });
    gsap.from(".furniture img", {
      scrollTrigger: ".furniture img",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      x: -100,
    });
    gsap.from(".furniture p", {
      scrollTrigger: ".furniture p",
      opacity: 0,
      duration: 0.7,
      delay: 1,
      x: 30,
    });
    gsap.from(".expertSystem img", {
      scrollTrigger: ".expertSystem img",
      opacity: 0,
      duration: 1,
      delay: 1.2,
      x: 100,
    });
    gsap.from(".description1", {
      scrollTrigger: ".description1",
      opacity: 0,
      duration: 1,
      delay: 1.2,
      x: -60,
    });
    gsap.from(".expertSystem p", {
      scrollTrigger: ".expertSystem p",
      opacity: 0,
      duration: 1,
      delay: 1.3,
      x: -60,
    });
    gsap.from(".machineLearning img", {
      scrollTrigger: ".machineLearning img",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      x: -100,
    });
    gsap.from(".description2", {
      scrollTrigger: ".description2",
      opacity: 0,
      duration: 1,
      delay: 1.2,
      x: 60,
    });
    gsap.from(".machineLearning p", {
      scrollTrigger: ".machineLearning p",
      opacity: 0,
      duration: 1,
      delay: 1.3,
      x: 60,
    });

    // skills
    gsap.from(".skills h1", {
      scrollTrigger: ".skills h1",
      opacity: 0,
      duration: 1,
      delay: 0.7,
      y: -30,
    });
    gsap.from(".skills .line", {
      scrollTrigger: ".skills .line",
      opacity: 0,
      duration: 1,
      delay: 0.9,
      y: -30,
    });
    gsap.from(".programming img", {
      scrollTrigger: ".programming img",
      opacity: 0,
      duration: 1,
      delay: 0.9,
      y: -30,
      stagger: 0.1,
    });
    gsap.from(".design img", {
      scrollTrigger: ".design img",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      y: -30,
      stagger: 0.3,
    });

    // contact
    gsap.from(".contact h1", {
      scrollTrigger: ".contact h1",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      x: -30,
    });
    gsap.from(".contact .line", {
      scrollTrigger: ".contact .line",
      opacity: 0,
      duration: 1,
      delay: 1.1,
      y: -30,
    });
    gsap.from(".contact_social img", {
      scrollTrigger: ".contact_social img",
      opacity: 0,
      duration: 1.1,
      delay: 0.4,
      x: 30,
    });
    gsap.from(".contact .desc", {
      scrollTrigger: ".contact .desc",
      opacity: 0,
      duration: 1,
      delay: 1.2,
      x: -30,
    });
    gsap.from(".contact_social a", {
      scrollTrigger: ".contact a",
      opacity: 0,
      duration: 1.1,
      delay: 1.2,
      y: -30,
      stagger: 0.2,
    });
    gsap.from(".copyright p", {
      scrollTrigger: ".copyright p",
      opacity: 0,
      duration: 1.1,
      delay: 1.2,
      x: -30,
    });
  } catch (error) {
    console.warn("Error in GSAP animations:", error);
  }
})();

// parallax with error handling
(function () {
  "use strict";

  // Check if jarallax is loaded before running parallax
  if (typeof jarallax === "undefined") {
    console.warn("Jarallax library not loaded, skipping parallax effects");
    return;
  }

  try {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
    });
  } catch (error) {
    console.warn("Error in parallax initialization:", error);
  }
})();
