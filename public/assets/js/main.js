/* All in One Maintenance — interactions
   Lightweight, dependency-free. */
(function () {
  "use strict";

  /* ---- Business constants (single source of truth) ---- */
  var WHATSAPP_NUMBER = "27662169504"; // 066 216 9504
  var EMAIL = "maintainallinone@gmail.com";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---- Mobile nav ---- */
  var burger = $(".burger");
  var nav = $(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Sticky header shadow ---- */
  var header = $(".header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 8);
    var top = $(".to-top");
    if (top) top.classList.toggle("show", window.scrollY > 560);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Back to top ---- */
  var toTop = $(".to-top");
  if (toTop) toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 3, 2) * 80 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Current year ---- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Fast quote WhatsApp links ---- */
  var buildWhatsAppUrl = function (message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  };

  $$('[data-fast-quote-service]').forEach(function (link) {
    var service = link.getAttribute("data-fast-quote-service") || "General";
    var message = "Hi All in One Maintenance, I'd like a fast quote for " + service + ".";
    link.setAttribute("href", buildWhatsAppUrl(message));
  });

  /* ---- Contact form -> WhatsApp / email (no backend needed) ---- */
  var form = $("#quote-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var service = (data.get("service") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      var lines = [
        "Hi All in One Maintenance, I'd like a free quote.",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Service needed: " + (service || "General"),
      ];
      if (message) { lines.push("Details: " + message); }
      var text = lines.join("\n");

      var success = $(".form-success");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      var method = (data.get("method") || "whatsapp").toString();
      if (method === "email") {
        var subject = encodeURIComponent("Quote request — " + (service || "General") + " (" + name + ")");
        window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + encodeURIComponent(text);
      } else {
        window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      }
      form.reset();
    });
  }
})();
