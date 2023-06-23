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
  autoplaySpeed: 3000,
  // responsive: {
  //   770: {
  //     arrows: true,
  //   },
  // }
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach ((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       entry.target.classList.add('');
//     } else {
//     entry.target.classList.remove('show');
//     }
//   });
// });  

// const hiddenElements = document.querySelectorAll('.hidden') ;
// hiddenElements.forEach((el) => observer.observe(el));


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("slide-right")) {
        entry.target.classList.add("slide-right-appear");
      } else if (entry.target.classList.contains("slide-left")) {
        entry.target.classList.add("slide-left-appear");
      } else if (entry.target.classList.contains("slide-up")) {
        entry.target.classList.add("slide-up-appear");
      }
    } else {
      if (entry.target.classList.contains("slide-right")) {
        entry.target.classList.remove("slide-right-appear");
      } else if (entry.target.classList.contains("slide-left")) {
        entry.target.classList.remove("slide-left-appear");
      } else if (entry.target.classList.contains("slide-up")) {
        entry.target.classList.remove("slide-up-appear");
      }
    }
  });
});

const slideRightElements = document.querySelectorAll(".slide-right");
slideRightElements.forEach((el) => {
  el.classList.add("hide-left");
  observer.observe(el);
});

const slideLeftElements = document.querySelectorAll(".slide-left");
slideLeftElements.forEach((el) => {
  el.classList.add("hide-right");
  observer.observe(el);
});

const slideUpElements = document.querySelectorAll(".slide-up");
slideUpElements.forEach((el) => {
  el.classList.add("hide-down");
  observer.observe(el);
});
