// Smooth page transitions
document.querySelectorAll('a[href]').forEach(link => {
  if (link.hostname === window.location.hostname && !link.hash) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => (window.location.href = link.href), 400);
    });
  }
});

// Smooth scroll for internal anchors (#section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
