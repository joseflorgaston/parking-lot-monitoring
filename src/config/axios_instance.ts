import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://dummyapi.com/api',
  timeout: 1000,
});

export default axiosInstance;
