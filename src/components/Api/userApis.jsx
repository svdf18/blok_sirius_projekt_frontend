import axios from 'axios';
<<<<<<< Updated upstream
import { endpoint } from '../../constants/endpoint';
=======
import { endpoint } from './endpoint'
import { useState, useEffect } from 'react';
>>>>>>> Stashed changes

export const getUsers = async () => {
  try {
    const response = await axios.get(`${endpoint}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        console.log('Data received:', data);
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return users;
};

//  export const deleteUser = async (userId) => {
//     const [error, setError] = useState(null);
//     try {
//       await axios.delete(`${endpoint}/users/${userId}`);
//       setDeletedUser(userId);
//     } catch (error) {
//       console.error(`Error deleting user with ID ${userId}:`, error.message);
//       console.error("Error details:", error.response?.data);
//       setError(error);
//     }
//   };

export const useDeleteUser = () => {
  const [deletedUser, setDeletedUser] = useState(null);
  const [error, setError] = useState(null);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${endpoint}/users/${userId}`);
      setDeletedUser(userId);
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error.message);
      console.error("Error details:", error.response?.data);
      setError(error);
    }
  };

  return { deleteUser, deletedUser, error };
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