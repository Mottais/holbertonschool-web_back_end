const myPromise = new Promise(function(Appelé_Si_succes, Appelé_Si_rejet) {
  // Simulation d'une opération asynchrne
  const success_opérationn_asynchrone = Math.floor(Math.random() * 10); // retour aléatoire entre [0, 9] de l'opération asynchrone

  // Si l'opération réussit, appelle 'Appelé_Si_succes' avec un objet contenant le statut et le message
  if (success_opérationn_asynchrone < 6) {
    Appelé_Si_succes({ status: success_opérationn_asynchrone, Mon_Message: "Operation réussie !" });
  } else {
    // Si l'opération échoue, appelle 'Appelé_Si_rejet' avec un objet contenant le statut et le message
    Appelé_Si_rejet({ status: success_opérationn_asynchrone, Mon_Message: "Operation échouée." });
  }
});

// Utilisation de la Promise
myPromise
  .then(
    function(retour_myPromise) {
    console.log(`Status: ${retour_myPromise.status}, Message: ${retour_myPromise.Mon_Message}`);
    console.log(myPromise);
    }
  )
  .catch((retour_myPromise) => {
    console.log(`Status: ${retour_myPromise.status}, Message: ${retour_myPromise.Mon_Message}`);
    console.log(myPromise);
  });
