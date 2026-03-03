function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
function handleSubmit(btn) {
  btn.textContent = "Sending...";
  btn.style.opacity = ".7";
  setTimeout(() => {
    btn.textContent = "✓ Message Sent!";
    btn.style.background = "linear-gradient(135deg,#22c55e,#16a34a)";
    btn.style.opacity = "1";
  }, 1500);
}
