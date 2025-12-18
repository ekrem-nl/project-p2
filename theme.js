document.addEventListener("DOMContentLoaded", () => {


  console.log("JS bestand is geladen");

  /* =========================
     COOKIE MELDING
  ========================= */
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (acceptBtn && cookieBanner) {
    acceptBtn.addEventListener("click", () => {
      cookieBanner.style.display = "none";
      localStorage.setItem("cookiesAccepted", "1");
    });

    if (localStorage.getItem("cookiesAccepted") === "1") {
      cookieBanner.style.display = "none";
    }
  }

  /* =========================
     DARK MODE
  ========================= */
  const toggle = document.getElementById("darkmode-toggle");
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  /* =========================
     ⏰ TIJD-GEBONDEN GROET
  ========================= */
  const greetingEl = document.getElementById("greeting");

  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Welkom";

    if (hour >= 6 && hour < 12) {
      greeting = "Goedemorgen 👋";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Goedemiddag 👋";
    } else {
      greeting = "Goedenavond 👋";
    }

    greetingEl.textContent = greeting;
  }

  /* =========================
     🍔 HAMBURGER MENU
  ========================= */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

});

const targetDate = new Date(2026, 11, 31, 23, 59, 59); // 31 december 2026

const countdownElement = document.getElementById("countdown");

const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(interval);
        countdownElement.textContent = "Tijd is om!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `${days}d ${hours}u ${minutes}m ${seconds}s`;
}, 1000);
