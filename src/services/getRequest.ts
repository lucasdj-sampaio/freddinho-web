import axios from 'axios';
import React from 'react';

export function validCredential(user: String, password: String) {
  const [apiResponse, setResponse] = React.useState();

  React.useEffect(() => {
    async function get(user, password) {
      const response = await axios.get(
        'https://freddinho-api.azurewebsites.net/validcredential',
        {
          headers: {
            email: user,
            password: password,
          },
        }
      );
      setResponse(response.data);
    }
    get(user, password);
  }, []);

  return apiResponse;
}

export function getDependent(userId: string) {
  const [apiResponse, setResponse] = React.useState();

  React.useEffect(() => {
    async function get(userId) {
      const response = await axios.get(
        'https://freddinho-api.azurewebsites.net/getdependent',
        {
          headers: {
            userId: userId,
          },
        }
      );
      setResponse(response.data);
    }
    get(userId);
  }, []);

  return apiResponse;
}
