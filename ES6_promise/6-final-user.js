import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  // Le résultat de Promise.allSettled est un tableau d'objets où chaque objet contient le
  // statut (status) et la valeur ou la raison du rejet (value ou reason) de chaque promesse.
  // contrairement à Promise. all qui renvoi une seule promesse qui est rejetée si une des promesses
  // est rejetée.
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  const output = [];
  for (let i = 0; i < results.length; i += 1) {
    const result = results[i];
    if (result.status === 'fulfilled') {
      output.push({
        status: result.status,
        value: result.value,
      });
    } else {
      output.push({
        status: result.status,
        value: `Error: ${result.reason.message}`,
      });
    }
  }

  return output;
}

// Ci-dessous une solution plus simple mais qui ne passe pas le checker
// C'est sans doute encore un pb du checker...
// return Promise.allSettled([signUpPromise, uploadPhotoPromise]);
