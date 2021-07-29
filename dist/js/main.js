"use strict";

// import { toggleMenuClickOutside, toggleMenuAndIcons } from "./navbar.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const hamburger = document.querySelector(".fa-bars");
  hamburger.addEventListener("click", toggleMenu);
};

const toggleMenu = () => {
  const menu = document.querySelector(".nav__menu");
  const links = document.querySelectorAll(".nav__link");
  const body = document.body;

  menu.classList.toggle("nav__toggle-menu");
  menu.classList.contains("nav__toggle-menu")
    ? (body.style.position = "fixed")
    : (body.style.position = "relative");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav__toggle-menu");
      if (body.style.position === "fixed") body.style.position = "relative";
    });
  });
};
