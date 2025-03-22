import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BLOGAPP_API_BASE_URL || 'http://localhost:5232', // Use the base URL from .env
});

export default axiosInstance;