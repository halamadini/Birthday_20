const petalField = document.getElementById("petalField");
const petalSymbols = ["✿", "♡", "✧", "·", "♥"];


function makePetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.setProperty("--drift", (Math.random() * 220 - 110) + "px");
  petal.style.animationDuration = (7 + Math.random() * 8) + "s";
  petal.style.animationDelay = (Math.random() * 2) + "s";
  petal.style.fontSize = (10 + Math.random() * 15) + "px";
  petalField.appendChild(petal);
  setTimeout(() => petal.remove(), 18000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 77; i++) {
    setTimeout(makePetal, i * 93);
  }
  setInterval(makePetal, 100);
}
