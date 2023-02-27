"use strict";

// const accordionList = document.querySelectorAll(".accordion-item");
// console.log(accordionList);

// accordionList.forEach((accordion) => {
//   const accordionHeader = accordion.querySelector(".accordion-item__header");

//   accordionHeader.addEventListener("click", function () {
//     accordionList.forEach((item) => {
//       if (item != accordion) {
//         item.classList.remove("accordion-item--active");
//       }

//       accordion.classList.toggle("accordion-item--active");
//     });
//   });
// });

const accordion = document.querySelector(".accordion");
const accordionHeaders = accordion.querySelectorAll(".accordion-item__header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", function () {
    const activeHeader = accordion.querySelector(
      ".accordion-item__header--active"
    );
    const activeDescr = accordion.querySelector(
      ".accordion-item__content.accordion-item__content--visible"
    );
    const clickedDescr = accordionHeader.parentElement.querySelector(
      ".accordion-item__content"
    );

    if (activeHeader) {
      activeHeader.classList.remove("accordion-item__header--active");
    }

    accordionHeader.classList.toggle("accordion-item__header--active");

    if (activeDescr) {
      activeDescr.classList.remove("accordion-item__content--visible");
      activeDescr.style.maxHeight = null;
    }

    clickedDescr.classList.toggle("accordion-item__content--visible");
    clickedDescr.style.maxHeight = clickedDescr.scrollHeight + "px";
  });
});
