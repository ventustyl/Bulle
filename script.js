let compteur = document.querySelector("h3");
let tempRestant = document.querySelector("h2");
let score = document.querySelector(".score");
let valeur = 0;

function fabriqueBulle() {
  const bulle = document.createElement("span");

  document.body.appendChild(bulle);

  bulle.classList.add("bulle");

  const tailleNum = Math.random() * 100 + 20;
  const taille = tailleNum + "px";

  bulle.style.width = taille;

  bulle.style.height = taille;
  bulle.style.top = Math.random() * 100 + 40 + "%";
  bulle.style.left = Math.random() * 100 + "%";
  bulle.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
  bulle.style.setProperty("--left", Math.random() * 100 + "%");

  bulle.addEventListener("click", () => {
    bulle.remove();
    console.log(tailleNum);
    if (tailleNum >= 20 && tailleNum <= 39) {
      valeur = valeur + 4;
    } else if (tailleNum >= 40 && tailleNum <= 59) {
      valeur = valeur + 2;
    } else {
      valeur = valeur + 1;
    }
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

    tempRestant.textContent = "temps restant " + temps;
    if (temps === 0) {
      clearInterval(decompte);
      score.style.display = "flex";
      score.style.zIndex = "9999999";
      // if (window.confirm("Rejouer ?")) {
      //   location.reload();
      // }
    }
  }, 1000);
}

window.onload = decompte();
