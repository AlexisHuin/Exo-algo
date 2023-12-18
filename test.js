document.addEventListener("DOMContentLoaded", function () {
  //gestion dark/light mode
  let targetDarkmode = document.querySelector(".darkMode");
  targetDarkmode.addEventListener("click", () => {
    let colorTheme = document.body;
    
    let currentTheme = colorTheme.getAttribute("data-bs-theme");
    if (currentTheme == "light") {
      targetDarkmode.textContent = "Light"
      colorTheme.setAttribute("data-bs-theme", "dark");
    } else {
      targetDarkmode.textContent = "Dark"
      colorTheme.setAttribute("data-bs-theme", "light");
    }
  });

  //Exo 1 Nombre entier
  let InputNbEntier = document.querySelector("#nbEntierInput");
  let target = document.querySelector("#nbEntier");
  function nbEntiers(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
      somme += i;
    }
    return somme;
  }
  target.addEventListener("click", function () {
    let valeurInputNbEntier = InputNbEntier.value;
    let resultat = nbEntiers(valeurInputNbEntier);
    alert(
      "La somme des entiers de 1 à " +
        valeurInputNbEntier +
        " est : " +
        resultat
    );
  });

  // Exo 2

  let addTable = document.querySelector(".addTable");
  let targetAdd = document.querySelector(".findNumber");
  let valueTarget = document.querySelector(".inputArray");
  const lignes = 10;
  const colonnes = 1;

  let table = document.createElement("table");
  table.setAttribute("class", "table mt-4");

  for (let i = 1; i < lignes; i++) {
    let ligne = table.insertRow();
    ligne.textContent = "Valeur";

    for (let j = 0; j < colonnes; j++) {
      let cellule = ligne.insertCell();
      cellule.textContent = i;
    }
  }
  addTable.addEventListener("click", () => {
    if (addTable.textContent === "Afficher tableau") {
      addTable.textContent = "Fermer tableau";
      targetAdd.insertAdjacentElement("afterend", table);
    } else {
      addTable.textContent = "Afficher tableau";
      let destroyTable = document.querySelector("table");
      destroyTable.remove();
    }
  });
  // Fonction de recherche dans le tableau
  function findMe(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i + 1;
      }
    }
    return -1;
  }
  let arrayResearch = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  targetAdd.addEventListener("click", () => {
    let targetElement = parseInt(valueTarget.value);
    let position = findMe(arrayResearch, targetElement);
    if (position !== -1) {
      alert(
        "L'élément " + targetElement + " a été trouvé a la position " + position
      );
    } else {
      alert(
        "L'élément " + targetElement + " n'a pas été trouvé dans le tableau"
      );
    }
  });
  // Exo 3 Mots Inversé
  let addReverse = document.querySelector(".addReverse");
  addReverse.addEventListener("click", () => {
    let inputReverse = document.querySelector(".inputReverse");
    let valueReverse = inputReverse.value;
    let resultReverse = reverseMe(valueReverse);
    alert("Votre texte inversé est " + resultReverse);
  });

  function reverseMe(string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reverseString += string[i];
    }
    return reverseString;
  }
});

// Fibonacci a implémenter
function fib(n) {
  if(n === 0) {
    return 0
  } else if( n === 1) {
    return 1
  } else {
    
    return fib(n - 1) + fib( n - 2)
  }
}


