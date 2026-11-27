// Sticky header: hide while scrolling down, show again when scrolling up.
const topbar = document.querySelector(".topbar");
let lastY = scrollY;

addEventListener("scroll", () => {
  const y = scrollY;
  topbar.classList.toggle("hidden", y > lastY && y > topbar.offsetHeight);
  topbar.classList.toggle("scrolled", y > 0);
  lastY = y;
}, { passive: true });
