const galleryOnlyItems = document.querySelectorAll(".gallery-only-item");

  const galleryOnlyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  galleryOnlyItems.forEach((item) => galleryOnlyObserver.observe(item));