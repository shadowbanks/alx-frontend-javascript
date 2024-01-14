import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const returnResponse = { photo: null, user: null };
  try {
    returnResponse.photo = await uploadPhoto();
    returnResponse.user = await createUser();
  } catch (err) {
    return returnResponse;
  }
  return returnResponse;
}
