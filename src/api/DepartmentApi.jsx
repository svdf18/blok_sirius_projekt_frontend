import axios from 'axios';
import { endpoint } from './endpoint';

//Get departments
export const getDepartments = async () => {
  try {
    const response = await axios.get(`${endpoint}/departments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    throw error;
  }
};

//Get departments for a specific eventId
export const getEventDepartments = async (eventId) => {
  try {
    const response = await axios.get(`${endpoint}/event-departments/${eventId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event departments:', error.message);
    throw error;
  }
};