import axios from 'axios';
import { endpoint } from './endpoint';

export const getRecommendations = async () => {
  try {
    const response = await axios.get(`${endpoint}/recommendations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    throw error;
  }
};

export const postRecommendation = async (formData) => {
  try {
    const response = await axios.post(`${endpoint}/recommendations`, formData);
    console.log('Recommendation created successfully:', response.data);
  } catch (error) {
    console.error('Error creating recommendation:', error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};

export const deleteRecommendation = async (recommendationId) => {
  try {
    await axios.delete(`${endpoint}/recommendations/${recommendationId}`);
  } catch (error) {
    console.error(`Error deleting recommendation with ID ${recommendationId}:`, error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};

export const updateRecommendation = async (formData) => {
  try {
    const response = await axios.put(`${endpoint}/recommendations/${formData.recommendation_id}`, formData);
    return response.data;
  } catch (error) {
    console.error(`Error updating recommendation with ID ${formData.recommendation_id}:`, error.message);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};