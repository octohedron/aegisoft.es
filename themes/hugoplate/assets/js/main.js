// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Conversion and attribution tracking hooks for GA4
  // ----------------------------------------
  const trackEvent = (eventName, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const text = (link.textContent || "").trim().slice(0, 120);
    const isSchedulerLink = href.includes("calendly.com");

    if (link.classList.contains("js-track-scheduler") || isSchedulerLink) {
      trackEvent("scheduler_open", { link_url: href, link_text: text });
      return;
    }

    if (href.includes("/consultation")) {
      trackEvent("consultation_cta_click", { link_url: href, link_text: text });
    } else if (href.includes("/offers/")) {
      trackEvent("offer_cta_click", { link_url: href, link_text: text });
    } else if (href.includes("/case-studies/")) {
      trackEvent("case_study_cta_click", { link_url: href, link_text: text });
    } else if (href.includes("/guides/")) {
      trackEvent("answer_hub_cta_click", { link_url: href, link_text: text });
    } else if (href.includes("/resources/")) {
      trackEvent("resource_download_cta_click", { link_url: href, link_text: text });
    }
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      trackEvent("contact_form_submit_attempt", { form_id: "contact-form" });
    });
  }
})();
