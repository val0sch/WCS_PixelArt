const app = document.getElementById("app");
const colors = ["red", "yellow", "green", "blue", "black"];
const size = "2.5rem";
let picker = "";
const canvasSize = 11;

function drawPalette() {
  const container = document.createElement("div");
  container.style.display = "flex";

  for (let i = 0; i < colors.length; i++) {
    const block = document.createElement("div");
    block.style.width = size;
    block.style.height = size;
    block.classList.add(colors[i]);
    block.addEventListener("click", () => {
      picker = colors[i];
    });
    container.appendChild(block);
  }
  app.appendChild(container);
}

drawPalette();

function drawGrid(sizeGrid) {
  const table = document.createElement("table");

  for (let i = 0; i < sizeGrid; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < sizeGrid; j++) {
      const block = document.createElement("td");

      block.addEventListener("click", () => {
        block.classList.add(picker);
      });
      row.appendChild(block);
    }
    table.appendChild(row);
  }
  app.appendChild(table);
}

drawGrid(canvasSize);

function clear() {
  const button = document.createElement("button");
  app.appendChild(button);
  button.innerHTML = "Clear";
  button.style.width = "50px";
  button.style.height = "50px";
  button.addEventListener("click", () => {
    let selectBlock = document.querySelectorAll("td");
    for (let j = 0; j < selectBlock.length; j++) {
      selectBlock[j].removeAttribute("class");
    }
  });
}

clear();

// Append an item to a list:
// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);

// var drawGrid = function () {
//   const container = document.createElement("div");

//   //soit on fait une ligne de 11 div

//   for (let i=0;i<=canvasSize;i++) {
//     let case = document.createElement("div");
//     container.appendChild(case);
//   }

// };

/**
 *
 * Etape 1 ✅
 *
 * afficher la palette de couleurs
 * Le type est une fonction
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
 * - Un create element pour créer la palette
 * doc : https://developer.mozilla.org/fr/docs/Web/API/HTMLStyleElement
 * - un style display flex pour l'avoir sur 1 ligne
 * - Boucle sur le tableau -> create element
 * - Une fonction qui va écouter le clique quand je selectionne une couleur
 *
 *  * - Je vais donner un style à ma td couleur hauteur/largeur
 * doc: https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
 * - je vais créer une fonction qui va écouter le clique pour la séléction de la cellule
 */

/** Injecter une class en js
     * doc: https://developer.mozilla.org/fr/docs/Web/API/Element/classList



/**
       * Je dois récuperer dans la variable "picker" la valeur de la cellule qui a été cliqué.
       *

 * 
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
 * - rajouter ma couleur à la div
 * - je rajoute la div à l'app
 *
 *
 * **
    


/***CHUT JE DIS RIEN
 * document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}
 https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
 */
