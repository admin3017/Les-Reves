const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});






const introSection = document.querySelector(".intro-section");
const zigzagRows = document.querySelectorAll(".zigzag-row");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* INTRO */
if (introSection) {
  const introObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        introSection.classList.add("lines-active");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: isMobile ? 0.18 : 0.35,
      rootMargin: isMobile ? "0px 0px -6% 0px" : "0px"
    }
  );

  introObserver.observe(introSection);
}

/* TEKST observer */
const copyObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const row = entry.target.closest(".zigzag-row");
      if (row) row.classList.add("copy-visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: isMobile ? 0.12 : 0.18,
    rootMargin: isMobile ? "0px 0px -2% 0px" : "0px 0px -6% 0px"
  }
);

/* SLIKA observer */
const mediaObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const row = entry.target.closest(".zigzag-row");
      if (row) row.classList.add("media-visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: isMobile ? 0.22 : 0.35,
    rootMargin: isMobile ? "0px 0px -6% 0px" : "0px 0px -12% 0px"
  }
);

zigzagRows.forEach((row) => {
  const copy = row.querySelector(".zigzag-copy");
  const media = row.querySelector(".zigzag-media");

  if (copy) copyObserver.observe(copy);
  if (media) mediaObserver.observe(media);
});