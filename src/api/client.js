import axios from 'axios';

const getDefaultClient = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
  });

const getPrivateClient = () => {
  const client = getDefaultClient();

  client.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('tkn');

      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    },
    (error) => {
      error.message = `PrivateClient::interceptor::request error - ${error.message}`;
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      const httpStatus = error.response ? error.response.status : null;

      if (httpStatus === 401) {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('tkn');
        window.location.replace('/');
      }

      return Promise.reject(error);
    }
  );

  return client;
};

const client = getDefaultClient();
const privateClient = getPrivateClient();

export { client, privateClient };
