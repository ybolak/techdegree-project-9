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

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// });

menuLink.addEventListener("click", () => {
  menuLink.classList.toggle("active");
});
