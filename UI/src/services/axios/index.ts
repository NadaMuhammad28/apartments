import axios from 'axios';

const baseURL: string = import.meta.env.VITE_APP_WEBSITE_IP;

const AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { AxiosInstance as Axios };
