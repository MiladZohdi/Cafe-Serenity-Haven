/* -------------------------------------------------------------------------- */
/*                              Mobile Navigation                             */
/* -------------------------------------------------------------------------- */

const btnNav = document.querySelector(".btn-nav");
const navCon = document.querySelector(".section-hero");
btnNav.addEventListener("click", function () {
  navCon.classList.toggle("nav-open");
});

/* -------------------------------------------------------------------------- */
/*                              smooth scrooling                              */
/* -------------------------------------------------------------------------- */

const allLinks = document.querySelectorAll(`a:link`);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-item"))
      navCon.classList.toggle("nav-open");
  });
});
/* -------------------------------------------------------------------------- */
/*                                 back button                                */
/* -------------------------------------------------------------------------- */

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (!ent.isIntersecting) document.body.classList.add("back-active");
  if (ent.isIntersecting) document.body.classList.remove("back-active");
});
obs.observe(sectionHeroEl);

/* -------------------------------------------------------------------------- */
/*                          Update the copyright year                         */
/* -------------------------------------------------------------------------- */

const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;
