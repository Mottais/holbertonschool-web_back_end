import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]);

  const output = [];
  for (let i = 0; i < results.length; i = 1 + 1) {
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
