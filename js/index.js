const btnMenyEl = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

if (btnMenyEl) {
  btnMenyEl.addEventListener("click", (e) => {
    e.preventDefault();

    header.classList.toggle("nav-open");
  });
}
