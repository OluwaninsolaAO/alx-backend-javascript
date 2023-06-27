import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo]).then((resp) => resp.map((res) => (res.status === 'fulfilled'
    ? { status: res.status, value: res.value }
    : { status: res.status, value: res.reason })));
}
