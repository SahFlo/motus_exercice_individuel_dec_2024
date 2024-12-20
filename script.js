//!!!!! TODO !!!!!
//conseil de Jérémy : une fonction par tâche : une pour le gagner, une pour lettres mal placées une pour lettres bien placées, etc.
//Et une fonction pour afficher, pas de mélange d'affichage et de return dans une fonction
//Refaire un tour sur les variables c'est le bordel
//Eviter de déclarer des variables gloables
//Il faut que je génère un mot avant de lancer une proposition donc avant le clic sur submit !

let wordToGuess = ["jaune", "vert", "bleu", "orange", "rouge", "violet", "blanc", "noir"]
let wordToGuessArray = handleWordToGuessArray()

let proposition = document.getElementById("proposition").value //récupère l'input
let propositionArray = proposition.split("") //découpe la proposition


const wellPlaced = document.getElementById("well-placed") 
const missPlaced = document.getElementById ("miss-placed")
const notInWord = document.getElementById("not-in-word")
const endOfGame =  document.getElementById("end-of-game")
const submit = document.getElementById("submit")
const replay = document.getElementById("rejouer")

//Pour choisir dans la liste un mot à deviner et le découper en un tableau
function handleWordToGuessArray(){
  let randomIndex = Math.floor(Math.random() * wordToGuess.length) 
  //génère un chiffre entre 0 et 1 (math.random, le multiplie par la longueur du tableau et le ramène à son entier inférieur)
  let randomWord = wordToGuess[randomIndex]
  console.log(randomWord)
  return randomWord.split("")
}

//Une fonction pour gérer les différents états de jeu, gagné, lettres bien placées, lettres mal placées
submit.addEventListener("click",() =>{
    if (wordToGuessArray === propositionArray) {
      endOfGame.style.display = "🎉 Vous avez gagné ! 🎉";
      return true;
        //pas sûre de moi, return ? display ? Autre ? A MODIFIER OU VERIFIER

    } else {
      let wellPlacedArray = [];
      let missPlacedArray = [];
      let notInWordArray = [];
  
      // Vérifier les lettres bien placées
      for (let i = 0; i < propositionArray.length; i++) {
        if (wordToGuessArray[i] === propropositionArray[i]) {
          wellPlacedArray.push(propositionArray[i]);
        }
      }
  
      // Vérifier les lettres mal placées
      for (let i = 0; i < propositionArray.length; i++) {
        if (wordToGuessArray.includes(propositionArray[i]) && wordToGuessArray[i] !== propositionArray[i]) {
          missPlacedArray.push(propositionArray[i]);
        }
      }
  
      // Vérifier les lettres absentes
      for (const letter of propositionArray) {
        if (!wordToGuessArray.includes(letter)) {
          notInWordArray.push(letter);
        }
      }
  
      // Mettre à jour l'interface
      wellPlaced.innerText = "Bien placé: " + wellPlacedArray.join(", ");
      missPlaced.innerText = "Mal placé: " + missPlacedArray.join(", ");
      notInWord.innerText = "Pas dans le mot: " + notInWordArray.join(", ");
    }
  }
)  

replay.addEventListener("click", () =>{
  //vide l'écran 
  wellPlaced.innerText = "";
  missPlaced.innerText = "";
  notInWord.innerText = "";
  endOfGame.innerText = "";
  proposition.innerText = "";
  propositionArrayArray = [];
  //nouveau mot à faire deviner
    
  // relance la comparaison et le display
}
)
