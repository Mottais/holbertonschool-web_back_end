import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup (firstName, lastName, fileName) {
  try {
    const promesseUtilisateur = signUpUser(firstName, lastName);
    const promessePhoto = uploadPhoto(fileName);

    await Promise.all([promesseUtilisateur, promessePhoto]);

    return [
      {
        firstName,
        lastName,
        fileName,
      },
    ];
  } catch (erreur) {
    throw erreur;
  }
}

export default handleProfileSignup;
