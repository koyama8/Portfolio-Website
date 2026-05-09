/* navbar */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

menuIcon?.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar?.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`header nav a[href*="${id}"]`)?.classList.add("active");
    }
  });

  header?.classList.toggle("sticky", window.scrollY > 100);

  menuIcon?.classList.remove("bx-x");
  navbar?.classList.remove("active");
});

if (window.ScrollReveal) {
  window.ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  window.ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  window.ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", {
    origin: "top",
  });
  window.ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  window.ScrollReveal().reveal(".home-content h1, .about-img", { origin: "right" });
}

if (window.Typed) {
  new window.Typed(".multiple-text", {
    strings: ["Automação", "UX/UI Design"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
  });
}
