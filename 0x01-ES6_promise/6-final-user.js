import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  const status = [];

  return Promise.allSettled([sign, upload]).then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        status.push({ status: result.status, value: result.value });
      } else if (result.status === 'rejected') {
        status.push({ status: result.status, value: `${result.reason}` });
      }
    });
    return status;
  });
}
