import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadRes, createUserRes]) => {
      console.log(`${uploadRes.body} ${createUserRes.firstName} ${createUserRes.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
