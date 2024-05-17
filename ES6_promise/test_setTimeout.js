console.log("Start");

// setTimeout est  une fonction asynchrone
// 1er paramètre : fonction à exécuter
// 2ème paramètre : délai en ms
// 3ème paramètre facultatif : paramètre de la fonction à exécuter
// 4ème paramètre facultatif : paramètre de la fonction à exécuter
// ...


// 1er méthode : fonction anonyme fléchée
let duree = 5500;
setTimeout(() => { console.log("Fin du timeout de " + duree +" ms");}, duree);

// 2ème méthode : fonction anonyme classique
duree = 5500;
let arg2 = "2ème paramètre";
setTimeout(function(arg1 = "1er paramètre par defaut", arg2 = "2ème paramètre") {
  console.log("Fin du timeout de " + duree + " ms avec " + arg1 + " et " + arg2);
}, 5000);

// 3ème méthode : fonction nommée
duree = 1000;
arg2 = "2ème paramètre";
function toto(arg1 = "1er paramètre par defaut", arg2 = "2ème paramètre par defaut") {
  console.log("Fin du timeout de " + duree + " ms avec " + arg1 + " et " + arg2);
}
setTimeout(toto, duree, "1er paramètre");



// Exemple de fonction fléchée en JavaScript
const add = (a, b) => a + b;

// Utilisation de la fonction
const result1 = add(3, 4);
console.log(result1);  // Affiche 7
const result2 = add(4, -5.1);
console.log(result2);  // Affiche 7

console.log("End");
