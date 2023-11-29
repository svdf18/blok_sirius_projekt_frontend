import axios from 'axios';
import { endpoint } from '../../constants/endpoint';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${endpoint}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${endpoint}/users/${userId}`);
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error.message);
    console.error("Error details:", error.response?.data);
    throw error;
  }
};


export const updateUser = async (formData) => {
  try {
    const response = await axios.put(`${endpoint}/users/${formData.user_id}`, formData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${formData.user_id}:`, error.message);
    console.error("Error details:", error.response?.formData);
    throw error;
  }
};