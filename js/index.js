const btnMenyEl = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

if (btnMenyEl) {
  btnMenyEl.addEventListener("click", (e) => {
    e.preventDefault();

    header.classList.toggle("nav-open");
  });
}

// Sticky navigation
const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 1,
    // rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
