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

export const postEvent = async (formData) => {
  try {
    const response = await axios.post(`${endpoint}/events`, formData);
    const eventId = response.data.event_id;

    // Add logic to handle departments
    const { selectedDepartments } = formData;
    await axios.post(`${endpoint}/event-departments/${eventId}`, { departments: selectedDepartments });

    console.log('Event created successfully:', response.data);
  } catch (error) {
    console.error('Error creating event:', error.message);
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