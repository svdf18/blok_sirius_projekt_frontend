import axios from 'axios';
import { endpoint } from './endpoint';

export const getDepartments = async () => {
  try {
    const response = await axios.get(`${endpoint}/departments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    throw error;
  }
};