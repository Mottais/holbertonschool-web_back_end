function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
const test = Promise.all([uploadPhoto(), createUser()])
test
    .then((resultats) => {
      console.log(`${resultats[0].body} ${resultats[1].firstName} ${resultats[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });


