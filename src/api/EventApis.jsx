import axios from 'axios';
import { endpoint } from './endpoint';

export const getEvents = async () => {
  try {
    const response = await axios.get(`${endpoint}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error.message);
    throw error;
  }
};

// Function to submit event data
export const postEvent = async (formData) => {
  try {
    const response = await axios.post(`${endpoint}/events`, formData);
    const eventId = response.data.event_id;

    console.log('Event created successfully:', response.data);
    console.log('Event ID:', eventId);

    return eventId; // Return the event ID for further use
  } catch (error) {
    console.error('Error creating event:', error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};

// Function to submit selected departments
export const postSelectedDepartments = async (eventId, selectedDepartments) => {
  try {
    // Ensure that the selectedDepartments is an array of integers
    const formattedDepartments = selectedDepartments.map((departmentId) => parseInt(departmentId, 10));

    // Check if there are selectedDepartments and make the request only if there are
    if (formattedDepartments.length > 0) {
      await axios.post(`${endpoint}/event-departments/${eventId}`, { departments: formattedDepartments });
      console.log('Departments submitted successfully');
    } else {
      console.log('No departments selected');
    }
  } catch (error) {
    console.error('Error submitting departments:', error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};


export const deleteEvent = async (eventId) => {
  try {
    await axios.delete(`${endpoint}/events/${eventId}`);
  } catch (error) {
    console.error(`Error deleting event with ID ${eventId}:`, error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};

export const updateEvent = async (formData) => {
  try {
    const response = await axios.put(`${endpoint}/events/${formData.event_id}`, formData);
    return response.data;
  } catch (error) {
    console.error(`Error updating event with ID ${formData.event_id}:`, error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};