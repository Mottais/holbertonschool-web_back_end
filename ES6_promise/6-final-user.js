import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  // Le résultat de Promise.allSettled est un tableau d'objets où chaque objet contient le
  // statut (status) et la valeur ou la raison du rejet (value ou reason) de chaque promesse.
  // contrairement à Promise. all qui renvoi une seule promesse qui est rejetée si une des promesses
  // est rejetée.
  return Promise.allSettled([signUpPromise, uploadPhotoPromise]);
}
