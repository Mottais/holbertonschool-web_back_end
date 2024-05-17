// Simulation des requêtes asynchrones avec des promesses

// toujours résolu
function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from fetchData1");
    }, 1000); // 1 seconde de délai
  });
}

// toujours résolu
function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from fetchData2");
    }, 2000); // 2 secondes de délai
  });
}

// toujours résolu de manière aléatoire
function fetchData3() {
  return new Promise((resolve, reject) => {
   // Simulation d'une opération asynchrne
    const success_opérationn_asynchrone = Math.floor(Math.random() * 10); // retour aléatoire entre [0, 9] de l'opération asynchrone

    if (success_opérationn_asynchrone < 6) {
      setTimeout(() => {
        resolve("Data from fetchData3");
      }, 3000); // 3 secondes de délai
    } else {
      reject("Erreur dans fetchData3");
    }
  });
}

console.log("Start");


// Utiliser Promise.all pour attendre que toutes les promesses soient résolues ou qu'une soit rejetée
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((results) => {
    console.log("Promise.all REUSSI: " + results);
    // Affiche ["Data from fetchData1", "Data from fetchData2", "Data from fetchData3"]
  })
  .catch((results) => {
    console.error("Promise.all ECHEC: " + results);
    // Affiche une erreur si l'une des promesses est rejetée
  });



// Utiliser Promise.allSettled pour attendre que toutes les promesses soient finalisées
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
.then((results) => {
  // Affichage des résultats
  for (const [index, result] of results.entries()) {
    if (result.status === "fulfilled") {
      console.log(`Promise.allSettled: ${index + 1} fulfilled with value: ${result.value}`);
    } else {
      console.log(`Promise.allSettled: ${index + 1} rejected with reason: ${result.reason}`);
    }
  }
});


// Utiliser Promise.race pour obtenir le résultat de la première promesse qui se termine
Promise.race([fetchData1(), fetchData2(), fetchData3()])
  .then((result) => {
    console.log("Promise.race REUSSIE : " + result); // Affiche la première à se terminer avec succès
  })
  .catch((result) => {
    console.error("Promise.race ECHEC : " + result);
  });

console.log("End");
