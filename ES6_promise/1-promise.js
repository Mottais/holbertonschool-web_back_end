export default function getFullResponseFromAPI(success) {
  return new Promise((resultat, rejet) => {
    if (success) {
      resultat({ status: 200, body: 'Success' });
    } else {
      rejet(new Error('The fake API is not working currently'));
    }
  });
}
