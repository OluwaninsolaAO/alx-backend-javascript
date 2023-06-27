import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.all([user, photo])
    .then(([vUser, vPhoto]) => [
      { status: 'success', value: vUser },
      { status: 'success', value: vPhoto },
    ])
    .catch(() => {});
}
