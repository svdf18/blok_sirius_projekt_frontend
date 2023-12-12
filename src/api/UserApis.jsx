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

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${endpoint}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error.message);
    throw error;
  }
};

export const postUser = async (formData) => {
  try {
    const response = await axios.post(`${endpoint}/users`, formData);
    console.log('User created successfully:', response.data);

    // If the user was created successfully, link the user to the department
    if (response.data.user_id && formData.department) {
      await linkUserToDepartment(response.data.user_id, formData.department);
      console.log('User linked to department successfully');
    }
  } catch (error) {
    console.error(`Error creating user with ID ${formData.user_id}:`, error.message);
    console.error("Error details:", error.response?.data);
    throw error;
  }
};

// Function to link user to department
const linkUserToDepartment = async (userId, departmentName) => {
  try {
    await axios.post(`${endpoint}/link-user-to-department`, { userId, departmentName });
  } catch (error) {
    console.error(`Error linking user with ID ${userId} to department ${departmentName}:`, error.message);
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


// Function to check invitation
export const checkInvitation = async (userContext, eventId) => {
  const userId = userContext?.user?.user_id;

  try {
    const response = await axios.post(`${endpoint}/link-user-to-event/check-invitation`, { userId, eventId });
    console.log('Check Invitation Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error checking invitation:', error.message);
    throw error;
  }
};

// Function to mark attendance
export const markAttendance = async (userContext, eventId) => {
  const userId = userContext?.user?.user_id; // Make sure to extract userId correctly

  try {
    const response = await axios.post(`${endpoint}/link-user-to-event/mark-attendance`, { userId, eventId });
    return response.data;
  } catch (error) {
    console.error('Error marking attendance:', error.message);
    throw error;
  }
};

// Function to get attending users
export const getAttendingUsers = async (eventId) => {
  try {
    const response = await axios.get(`${endpoint}/link-user-to-event/attending-users`, { params: { eventId } });
    console.log('Get Attending Users Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting attending users:', error.message);
    throw error;
  }
};