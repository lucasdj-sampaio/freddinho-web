import axios from 'redaxios';

const instance = axios.create({
  baseURL: 'https://freddinho-api.azurewebsites.net',
});

export async function validCredential(user, password) {
  const response = await instance.post('validcredential', {
    body: { email: user, password: password },
  });

  return JSON.stringify(response.data);
}

export async function getAccountId(user, password) {
  try {
    const response = await instance.post('getaccountid', {
      body: {
        email: user,
        password: password,
      },
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

    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
}
