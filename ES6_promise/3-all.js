import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resultats) => {
      console.log(`${resultats[0].body} ${resultats[1].firstName} ${resultats[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
