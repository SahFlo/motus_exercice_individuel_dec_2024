//Ca ne marche pas mais on est pas loin.
//A refaire avec plus de console.log et un addEventListener

let base = "dictionnaire"; //mot à deviner - plutôt un objet ?
let guess = document.getElementById("guess").value
let guessArray = guess.split("")
let baseArray = base.split("");

const wellPlaced = document.getElementById("well-placed") 
const missPlaced = document.getElementById ("miss-placed")
const notInWord = document.getElementById("not-in-word")
const endOfGame =  document.getElementById("end-of-game")

function newGame(){
  //vide l'écran 
  wellPlaced.innerText = "";
  missPlaced.innerText = "";
  notInWord.innerText = "";
  endOfGame.innerText = "";
  guess = "";
  guessArray = [];
  //nouveau mot à faire deviner
    const dictionary = ["dictionnaire", "javascript", "ordinateur", "programmation"];
    base = dictionary[Math.floor(Math.random() * dictionary.length)]; // Nouveau mot à deviner
    baseArray = base.split("");
  // relance la comparaison et le display
  console.log("Nouveau mot à deviner :", base); // Pour tester dans la console
}

//Une fonction pour gérer les différents états de jeu, gagné, lettres bien placées, lettres mal placées
function handleGameState(){
  let guess = document.getElementById("guess").value;
  let guessArray = guess.split("");

  // Victoire
  if (guess === base) {
    endOfGame.innerText = "🎉 Vous avez gagné ! 🎉";
    setTimeout(newGame, 2000); // Relance une nouvelle partie après 2 secondes
    newGame();
  }

  // Réinitialiser les tableaux
  let wellPlacedArray = [];
  let missPlacedArray = [];
  let notInWordArray = [];

  // Vérifier les lettres bien placées
  for (let i = 0; i < guessArray.length; i++) {
    if (baseArray[i] === guessArray[i]) {
      wellPlacedArray.push(guessArray[i]);
    }
  }

  // Vérifier les lettres mal placées
  for (let i = 0; i < guessArray.length; i++) {
    if (baseArray.includes(guessArray[i]) && baseArray[i] !== guessArray[i]) {
      missPlacedArray.push(guessArray[i]);
    }
  }

  // Vérifier les lettres absentes
  for (const letter of guessArray) {
    if (!baseArray.includes(letter)) {
      notInWordArray.push(letter);
    }
  }

  // Mettre à jour l'interface
  wellPlaced.innerText = "Bien placé: " + wellPlacedArray.join(", ");
  missPlaced.innerText = "Mal placé: " + missPlacedArray.join(", ");
  notInWord.innerText = "Pas dans le mot: " + notInWordArray.join(", ");
}
