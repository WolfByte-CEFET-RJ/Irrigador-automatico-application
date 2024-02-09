import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const createAxiosInstance = () => {
  const { token } = useAuth();

  const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  return api;
};

export { createAxiosInstance };