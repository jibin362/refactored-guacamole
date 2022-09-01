import axios from 'axios';

const cancelTokenSource = () => axios.CancelToken.source();

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  timeout: 1500,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` }
});

export { cancelTokenSource, instance };
