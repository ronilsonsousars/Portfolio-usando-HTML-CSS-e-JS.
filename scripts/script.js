const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// Abrir Menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-open");
});

// Fechar menu quando um link é clicado
for (const link of navLinks) {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
  });
}

// Adciona uma nova classe (active-link) ao nav__link
for (const link of navLinks) {
  link.addEventListener("click", () => {
    for (const link of navLinks) {
      link.classList.remove("active-link");
    }
    link.classList.add("active-link");
  });
}

// Fechar menu quando se clica fora do menu
document.addEventListener("click", (event) => {
  if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove("is-open");
  }
});
