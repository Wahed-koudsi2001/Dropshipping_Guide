'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");
  const nums = document.querySelectorAll(".nums");

  const options = {
    threshold: .1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nums.forEach(num => {
          const targetNumber = +num.innerText.replace(/\D/g, "");
          let count = 0;
          const countInterval = setInterval(() => {
            if (count < targetNumber) {
              count += Math.ceil(targetNumber / 220);
              num.textContent = "+" + count;
            } else {
              num.textContent = "+" + targetNumber;
              clearInterval(countInterval);
            }
          }, 20);
        });
        observer.unobserve(aboutSection);
      }
    });
  }, options);

  if (aboutSection) {
    observer.observe(aboutSection);
  } else {
    console.error("Element not found.");
  }
});

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});