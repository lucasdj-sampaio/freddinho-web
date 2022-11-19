import axios from 'redaxios';

const instance = axios.create({
  baseURL: 'https://localhost:7257',
});

export async function validCredential(user, password) {
  const response = await instance.post('validcredential', {
    email: user,
    password: password,
  });

  const parse: string = JSON.parse(JSON.stringify(response.data));
  //@ts-ignore
  return parse.success;
}

export async function getAccountId(user, password) {
  try {
    const response = await instance.post('getaccountid', {
      email: user,
      password: password,
    });

    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
}

export async function getDependent(userId) {
  try {
    const response = await instance.get('getdependent', {
      params: {
        userId: userId,
      },
    });

    const parse: string = JSON.parse(JSON.stringify(response.data));
    return parse;
  } catch (e) {
    console.log(e);
  }
}
