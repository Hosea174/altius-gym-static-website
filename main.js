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
  arrows: false,
  responsive: {
    770: {
      arrows: true,
    },
  }
});

const slider2 = new A11YSlider(document.querySelector(".slider2"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  SlidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  // responsive: {
  //   770: {
  //     arrows: true,
  //   },
  // }
});
