let compteur = document.querySelector("h3");
let tempRestant = document.querySelector("h2");
let valeur = 0;

function fabriqueBulle() {
  const bulle = document.createElement("span");

  document.body.appendChild(bulle);

  bulle.classList.add("bulle");

  const taille = Math.random() * 100 + 20 + "px";

  bulle.style.width = taille;
  bulle.style.height = taille;
  bulle.style.top = Math.random() * 100 + 50 + "%";
  bulle.style.left = Math.random() * 100 + "%";
  bulle.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
  bulle.style.setProperty("--left", Math.random() * 100 + "%");

  bulle.addEventListener("click", () => {
    bulle.remove();
    valeur = valeur + 1;
    console.log(valeur);
    compteur.textContent = valeur;
  });

  setTimeout(() => {
    bulle.remove();
  }, 5000);
}

setInterval(fabriqueBulle, 500);

function decompte() {
  let temps = 30;
  let decompte = setInterval(() => {
    temps--;
    console.log(temps);
    tempRestant.textContent = "temps restant " + temps;
    if (temps === 0) {
      clearInterval(decompte);
      if (window.confirm("Rejouer ?")) {
        location.reload();
      }
    }
  }, 1000);
}

window.onload = decompte();
