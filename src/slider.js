const slides = [
  {
    img: "src/assets/mountain.png",
    title: "Mountain View",
    desc: "A calm and powerful landscape.",
  },
  {
    img: "src/assets/city.png",
    title: "City Lights",
    desc: "Energy and motion captured at night.",
  },
  {
    img: "src/assets/nature.png",
    title: "Nature Close",
    desc: "Details that usually go unnoticed.",
  },
  {
    img: "https://picsum.photos/500/600",
    title: "NEW",
    desc: "Details that usually go unnoticed.",
  },
  {
    img: "https://picsum.photos/700/900",
    title: "NEW2",
    desc: "Details that usually go unnoticed.",
  },
];

let current = 0;

const image = document.getElementById("slideImage");
const title = document.getElementById("slideTitle");
const desc = document.getElementById("slideDesc");

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  image.style.opacity = 0;

  setTimeout(() => {
    image.src = slides[current].img;
    title.textContent = slides[current].title;
    desc.textContent = slides[current].desc;
    image.style.opacity = 1;
  }, 200);
}
