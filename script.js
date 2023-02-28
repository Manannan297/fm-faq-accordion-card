"use strict";

const accordions = document.querySelectorAll(".accordion-item");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion-item__content");
  accordion.classList.add("accordion-item--active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion-item__content");
  accordion.classList.remove("accordion-item--active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-item__header");
  const content = accordion.querySelector(".accordion-item__content");

  header.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
