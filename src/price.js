const items = document.querySelectorAll(".faq-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // delay for stagger effect
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120);

        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.2,
  },
);

items.forEach((item) => observer.observe(item));
