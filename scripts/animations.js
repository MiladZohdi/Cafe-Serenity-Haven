const tl = gsap.timeline();
tl.to(".nav", {
  scaleX: 1,
  duration: 0.5,
  ease: "linear",
})
  .fromTo(
    ".Header-primary",
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  )
  .fromTo(
    ".hero-description",
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  )
  .fromTo(
    ".hero-cta",
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  );

/* ------------------------ #Navbar Hover Animation # ----------------------- */
const navbarButtons = document.querySelectorAll(".nav-item");

navbarButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(".hero-cta", {
      color: "#5a4940",
      duration: 0.5,
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(".hero-cta", {
      color: "#140b06",
      duration: 0.5,
    });
  });
});

/* -------------------------- #CTA Hover Animation# ------------------------- */
const heroCta = document.querySelector(".hero-cta");

heroCta.addEventListener("mouseenter", () => {
  gsap.to(".hero-cta", {
    backgroundColor: "#311c10",
    color: "#eae8e7",
    duration: 0.5,
  });
});

heroCta.addEventListener("mouseleave", () => {
  gsap.to(".hero-cta", {
    backgroundColor: "#eae8e7",
    color: "#311c10",
    duration: 0.5,
  });
});

/* ---------------------------------- Features Section --------------------------------- */

const features = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".hero-cta",
    endTrigger: ".about-header",
    start: " center",
    end: " bottom",
    scrub: true,
    preventOverlaps: true,
  },
});

features.to(".feature-box", { x: 0, opacity: 1 });

/* ------------------------------ About Section ----------------------------- */

const about = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".about-header",
    endTrigger: ".about",
    start: " center",
    end: "bottom bottom",
    scrub: true,
    preventOverlaps: true,
  },
});

about
  .to(".about-img", { scale: 1.08, borderRadius: 10, opacity: 1 })
  .to(".about-desc", {
    x: 0,
    opacity: 1,
  });

/* ------------------------------- section How ------------------------------ */

const how = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".section-how",
    endTrigger: ".section-how",
    start: " center",
    end: "bottom bottom",
    scrub: true,
    preventOverlaps: true,
  },
});

how.to(".how-box", {
  x: 0,
  opacity: 1,
  stagger: {
    amount: 6,
    each: 0.5,
    from: 0,
  },
});

/* ------------------------------- section menu ------------------------------ */

const menu = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".section-menu",
    endTrigger: ".gallery-header",
    start: " center",
    end: "bottom bottom",
    scrub: true,
    preventOverlaps: true,
  },
});

menu.to(".products ", {
  x: 0,
  opacity: 1,
  stagger: {
    amount: 5,
    each: 1,
    from: 0,
  },
});

/* ------------------------------- section gallery ------------------------------ */

const gallery = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".section-gallery",
    endTrigger: ".gallery",
    start: " center",
    end: "top center",
    scrub: true,
  },
});

gallery.to(".gallery ", {
  y: 0,
});

/* ------------------------------- section testimonials ------------------------------ */

const testimonials = gsap.timeline({
  defaults: {
    ease: "none",
  },
  paused: true,
  scrollTrigger: {
    trigger: ".gallery",
    endTrigger: ".testimonial-box",
    start: "bottom center",
    end: "top center",
    scrub: true,
    preventOverlaps: true,
  },
});

testimonials.to(".testimonial-box  ", {
  x: 0,
  opacity: 1,
  stagger: {
    amount: 3,
    each: 0.1,
    from: 0,
  },
});
