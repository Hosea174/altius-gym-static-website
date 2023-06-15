const body = document.querySelector("body");
const header = document.querySelector("header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  if (nav.hasAttribute("data-visible")) {
    nav.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
  } else {
    nav.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
  }
  nav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
});
