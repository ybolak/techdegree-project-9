/* ============================================= */
/*                  Nav Menu                     */
/* ============================================= */

const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".off-screen-container");
const menuLink = document.querySelector(".menu-link");

function toggleOffScreenMenu(element) {
  element.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
}

toggleOffScreenMenu(hamMenu);
toggleOffScreenMenu(offScreenMenu);

menuLink.addEventListener("click", () => {
  menuLink.classList.toggle("active");
});

// Nav active class on scroll

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu-link");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((item) => {
    item.classList.remove("active");
    if (item.textContent.toLowerCase().includes(current)) {
      item.classList.add("active");
    }
  });
};
