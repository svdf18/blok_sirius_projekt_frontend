import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRecommendations } from './RecommendationApis.jsx'; // Replace with the actual path to your recommendation model
import RecommendationCard from '../utils/RecommendationCardUtil/RecommendationCardComponent.jsx';

const RecommendationList = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    try {
      const data = await getRecommendations();
      console.log('Data received:', data);
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRecommendations();

    const intervalId = setInterval(() => {
      fetchRecommendations();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {recommendations.map(recommendation => (
        <div key={recommendation.recommendation_id}>
          <RecommendationCard recommendation={recommendation}/>
        </div>
      ))}
    </>
  );
};

RecommendationList.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      recommendation_id: PropTypes.number.isRequired,
      created_by_id: PropTypes.number.isRequired,
      tagged_user_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecommendationList;