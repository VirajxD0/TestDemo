import "./style.css";
import "tailwindcss";

function resizeGridItem(item) {
  const grid = document.getElementById("gallery");
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("gap"),
  );

  const img = item.querySelector("img");

  const height = img.getBoundingClientRect().height;

  const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));

  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAll() {
  document.querySelectorAll(".item").forEach((item) => {
    resizeGridItem(item);
  });
}

window.addEventListener("load", resizeAll);
window.addEventListener("resize", resizeAll);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-show");
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".fade-hidden").forEach((el) => {
  observer.observe(el);
});
