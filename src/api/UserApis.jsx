import axios from 'axios';
import { endpoint } from './endpoint'

export const getUsers = async () => {
  try {
    const response = await axios.get(`${endpoint}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

export const postUser = async (formData) => {
  try {
    const response = await axios.post(`${endpoint}/users`, formData);
    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error(`Error creating user with ID ${formData.user_id}:`, error.message);
    console.error("Error details:", error.response?.data);
    throw error;
  }
};

export const deleteUser = async (userToDeleteId, currentUserId) => {
  try {
    // Pass both user_id to be deleted and the user_id of the user making the request
    await axios.delete(`${endpoint}/users/${userToDeleteId}/${currentUserId}`);
  } catch (error) {
    console.error(`Error deleting user with ID ${userToDeleteId}:`, error.message);
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