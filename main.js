const body = document.querySelector("body");
const header = document.querySelector("header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".navigation");
const menu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  if (nav.hasAttribute("data-visible")) {
    nav.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
    menu.src = "resources/menu-open.svg";
  } else {
    nav.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
    menu.src = "resources/menu-close.svg";
  }
  nav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  // slidesToShow: 4
});
