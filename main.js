document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-placeholder").innerHTML = html;

      const currentPageUrl = window.location.href;

      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if (link.href === currentPageUrl) {
          console.log(link.href);
          link.classList.add("current-page");
        }
      });
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-placeholder").innerHTML = html;

      const body = document.querySelector("body");
      const navToggle = document.querySelector(".mobile-nav-toggle");
      const nav = document.querySelector(".navigation");
      const menu = document.querySelector(".menu");
      const header = document.querySelector("header");
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

      const slider = new A11YSlider(document.querySelector(".slider"), {
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: {
          770: {
            arrows: true,
          },
        },
      });

      const slider2 = new A11YSlider(document.querySelector(".slider2"), {
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        SlidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    });
});

document
  .getElementById("open-spinning-dialog")
  .addEventListener("click", function () {
    document.getElementById("spinning-dialog").showModal();
  });
document
  .getElementById("open-mc-dialog")
  .addEventListener("click", function () {
    document.getElementById("mc-dialog").showModal();
  });
document
  .getElementById("open-pc-dialog")
  .addEventListener("click", function () {
    document.getElementById("pc-dialog").showModal();
  });
document
  .getElementById("open-ta-dialog")
  .addEventListener("click", function () {
    document.getElementById("ta-dialog").showModal();
  });
document
  .getElementById("open-circuit-dialog")
  .addEventListener("click", function () {
    document.getElementById("circuit-dialog").showModal();
  });
document
  .getElementById("open-hiit-dialog")
  .addEventListener("click", function () {
    document.getElementById("hiit-dialog").showModal();
  });
document
  .getElementById("open-sa-dialog")
  .addEventListener("click", function () {
    document.getElementById("sa-dialog").showModal();
  });
document
  .getElementById("open-ms-dialog")
  .addEventListener("click", function () {
    document.getElementById("ms-dialog").showModal();
  });
document
  .getElementById("open-mh-dialog")
  .addEventListener("click", function () {
    document.getElementById("mh-dialog").showModal();
  });
document
  .getElementById("open-fa-dialog")
  .addEventListener("click", function () {
    document.getElementById("fa-dialog").showModal();
  });
document
  .getElementById("open-run-dialog")
  .addEventListener("click", function () {
    document.getElementById("run-dialog").showModal();
  });
document
  .getElementById("open-as-dialog")
  .addEventListener("click", function () {
    document.getElementById("as-dialog").showModal();
  });

// const classNames = [
//   "spinning",
//   "mc",
//   "pc",
//   "te-abo",
//   "circuit",
//   "hiit",
//   "sa",
//   "ms",
//   "mh",
//   "fa",
//   "run",
//   "as",
// ];

// classNames.forEach((className) => {
//   const openButton = document.getElementById(`open-${className}-dialog`);
//   const dialog = document.getElementById(`${className}-dialog`);

//   openButton.addEventListener("click", function () {
//     dialog.showModal();
//   });
// });

const closeBtn = document.querySelectorAll(".close-btn");
const modals = document.querySelectorAll(".modal");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    modals.forEach((modal) => {
      modal.close();
    });
  });
});
