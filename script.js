// Funcția pentru animarea progresivă a valorilor
function animateNumber(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    current += increment;
    element.textContent = current.toLocaleString(); // Afiseaza numerele cu separator de mii
    if (
      (increment === 1 && current >= end) ||
      (increment === -1 && current <= end)
    ) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Verificăm dacă utilizatorul a ajuns la secțiunea cu suprafață și populație
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Apelarea funcției pentru suprafață și populație când utilizatorul ajunge la secțiunea respectivă
document.addEventListener("DOMContentLoaded", function () {
  const suprafataValoare = document.getElementById("suprafata-valoare");
  const populatieValoare = document.getElementById("populatie-valoare");
  const suprafataSection = document.getElementById("suprafata-populatie");

  // Valori reale ale suprafeței și populației
  const suprafataReal = 266; // presupunem 150 km²
  const populatieReal = 1169; // presupunem 5000 locuitori

  // Animare progresivă a valorilor când utilizatorul ajunge la secțiune
  function startAnimations() {
    animateNumber(suprafataValoare, 0, suprafataReal, 2000);
    animateNumber(populatieValoare, 0, populatieReal, 2000);
    window.removeEventListener("scroll", checkViewport);
  }

  // Verific în mod continuu dacă secțiunea cu suprafață și populație este în vizualizare
  function checkViewport() {
    if (isInViewport(suprafataSection)) {
      startAnimations();
    }
  }

  window.addEventListener("scroll", checkViewport);
});

// Evenimente pentru butoanele expand
document.addEventListener("DOMContentLoaded", function () {
  const expandBtns = document.querySelectorAll(".expand-btn");

  expandBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const details = this.nextElementSibling;

      if (details.style.display === "block") {
        details.style.display = "none";
        this.textContent = "+";
      } else {
        details.style.display = "block";
        this.textContent = "-";
      }
    });
  });
});
