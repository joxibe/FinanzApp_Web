// Navegación móvil
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
    }
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Header transparente en scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "white";
      header.style.backdropFilter = "none";
    }
  });

  // Animación de aparición en scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animación
  document
    .querySelectorAll(
      ".feature-card, .benefit-item, .screenshot, .privacy-card"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // Manejo de botones de descarga
  const playStoreBtn = document.getElementById("playStoreBtn");
  const apkDownloadBtn = document.getElementById("apkDownloadBtn");

  if (playStoreBtn) {
    playStoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Aquí pondría el enlace real de Google Play
      console.log("Redirigiendo a Google Play...");
      // window.open('https://play.google.com/store/apps/details?id=com.finanzapp', '_blank');
    });
  }

  if (apkDownloadBtn) {
    apkDownloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Aquí pondría el enlace de descarga directa del APK
      console.log("Iniciando descarga del APK...");
      // window.open('/downloads/finanz-app.apk', '_blank');
    });
  }

  // Contador de características (animación)
  function animateCounters() {
    const counters = document.querySelectorAll(".feature-card");

    counters.forEach((counter, index) => {
      setTimeout(() => {
        counter.style.transform = "scale(1.05)";
        setTimeout(() => {
          counter.style.transform = "scale(1)";
        }, 200);
      }, index * 100);
    });
  }

  // Ejecutar contador cuando se ve la sección de características
  const featuresSection = document.getElementById("features");
  if (featuresSection) {
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            featuresObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    featuresObserver.observe(featuresSection);
  }

  // Efecto parallax sutil en hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const rate = scrolled * -0.5;

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });

  // Lazy loading para imágenes
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Función para cambiar tema (si quisieras implementarlo)
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
}

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// Utilidades
const utils = {
  // Debounce para optimizar eventos de scroll
  debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  },

  // Función para detectar dispositivos móviles
  isMobile() {
    return window.innerWidth <= 768;
  },

  // Función para formatear números
  formatNumber(num) {
    return new Intl.NumberFormat("es-ES").format(num);
  },
};

// Manejo de errores para imágenes
document.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.target.src = "/api/placeholder/400/300";
      e.target.alt = "Imagen no disponible";
    }
  },
  true
);

// Analytics básico (opcional)
function trackEvent(action, label) {
  // Aquí podrías integrar Google Analytics, Mixpanel, etc.
  console.log(`Evento: ${action}, Label: ${label}`);
}

// Ejemplos de tracking
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-primary")) {
    trackEvent("click", "cta-button");
  }
  if (e.target.classList.contains("store-button")) {
    trackEvent("click", "download-button");
  }
});
