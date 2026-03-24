function toggleFAQ(index) {
  const content = document.getElementById(`faq-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  if (content.classList.contains("max-h-0")) {
    content.classList.remove("max-h-0", "opacity-0");
    content.classList.add("max-h-40", "opacity-100");
    icon.textContent = "−";
  } else {
    content.classList.add("max-h-0", "opacity-0");
    content.classList.remove("max-h-40", "opacity-100");
    icon.textContent = "+";
  }
}
