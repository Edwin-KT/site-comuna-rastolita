// Functia pentru animarea progresiva a valorilor
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

// Verific daca utilizatorul a ajuns la sectiunea cu suprafata si populatie
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

// Apelarea functiei pentru suprafata si populatie cand utilizatorul ajunge la sectiunea respectiva
document.addEventListener("DOMContentLoaded", function () {
  const suprafataValoare = document.getElementById("suprafata-valoare");
  const populatieValoare = document.getElementById("populatie-valoare");
  const suprafataSection = document.getElementById("suprafata-populatie");

  const suprafataReal = 266;
  const populatieReal = 1169;

  // Animare progresiva a valorilor cand utilizatorul ajunge la sectiune
  function startAnimations() {
    animateNumber(suprafataValoare, 0, suprafataReal, 2000);
    animateNumber(populatieValoare, 0, populatieReal, 2000);
    window.removeEventListener("scroll", checkViewport);
  }

  // Verific in mod continuu daca sectiunea cu suprafata si populatie este in vizualizare
  function checkViewport() {
    if (isInViewport(suprafataSection)) {
      startAnimations();
    }
  }

  window.addEventListener("scroll", checkViewport);
});

//functie pt butonul de plus pe pagina principala
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

//functie pt butonul de plus pe pagina de formulare
document.addEventListener("DOMContentLoaded", function () {
  const expandBtns = document.querySelectorAll(".expand-btn-formulare");

  expandBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const details = this.nextElementSibling;

      if (details.classList.contains("show")) {
        details.classList.remove("show");
        this.textContent = "+";
      } else {
        details.classList.add("show");
        this.textContent = "-";
      }
    });
  });
});
