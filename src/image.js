const images = document.getElementById(".gallery-img");

const ob = new Intersectionob(
  (entries, ob) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // load image
        img.src = img.dataset.src;

        // stagger delay (key part)
        setTimeout(() => {
          img.classList.remove("opacity-0", "translate-y-10");
          img.classList.add("opacity-100", "translate-y-0");
        }); // adjust timing here

        ob.unobserve(img);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -20% 0px",
    // triggers BEFORE fully entering viewport
  },
);

images.forEach((img) => ob.observe(img));
