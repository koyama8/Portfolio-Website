const menuToggle = document.querySelector("#menu-icon");
const headerMenu = document.querySelector("#header-menu");
const navbar = document.querySelector(".navbar");
const navIcon = menuToggle ? menuToggle.querySelector("i") : null;
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector(".header");
const scrollProgress = document.querySelector(".scroll-progress");

const setMenuState = (isOpen) => {
  if (!menuToggle || !headerMenu || !navIcon) {
    return;
  }

  headerMenu.classList.toggle("active", isOpen);
  navIcon.classList.toggle("bx-x", isOpen);
  navIcon.classList.toggle("bx-menu", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const closeMenu = () => {
  setMenuState(false);
};

if (menuToggle && headerMenu && navbar && navIcon) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = !headerMenu.classList.contains("active");
    setMenuState(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  headerMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.navbar a[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

const updateScrollProgress = () => {
  if (!scrollProgress) {
    return;
  }

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
};

const handleScroll = () => {
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 80);
  }

  updateActiveSection();
  updateScrollProgress();
  closeMenu();
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", () => {
  handleScroll();
});

if (window.ScrollReveal) {
  const sr = ScrollReveal({
    distance: "70px",
    duration: 1400,
    delay: 120,
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    reset: false,
  });

  sr.reveal(".home-content, .section-heading, .contact-copy", {
    origin: "top",
  });
  sr.reveal(".home-visual, .about-visual, .contact-panel", {
    origin: "right",
  });
  sr.reveal(".about-copy, .journey-copy, .journey-timeline", {
    origin: "left",
  });
  sr.reveal(".metric-card, .fact-card, .services-box, .portfolio-box, .contact-card", {
    origin: "bottom",
    interval: 120,
  });
}

if (window.Typed) {
  new Typed(".multiple-text", {
    strings: [
      "QA manual",
      "automacao de testes",
      "UX/UI Design",
      "qualidade digital",
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1300,
    loop: true,
  });
}
