import { useState, useEffect } from 'react';
import { getRecommendations } from './RecommendationApis.jsx';
import RecommendationCard from '../utils/RecommendationCardUtil/RecommendationCardComponent.jsx';
import UpdateRecommendationForm from '../utils/FormUtil/RecommendationUpdateComponent.jsx';

const RecommendationList = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const data = await getRecommendations();
        const previousRecommendations = [...recommendations];

        if (!areArraysEqual(previousRecommendations, data)) {
          setRecommendations(data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchRecommendations, 5000);

    fetchRecommendations();

    return () => clearInterval(intervalId);
  }, [recommendations]);

  const handleUpdateClick = (recommendationId, recommendationProps) => {
    setSelectedRecommendation({ recommendationId, ...recommendationProps });
  };

  const handleFormSubmit = async (updatedRecommendation) => {
    console.log(updatedRecommendation);
    setSelectedRecommendation(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {recommendations.map(recommendation => (
        <div key={recommendation.recommendation_id}>
          <RecommendationCard recommendation={recommendation} onUpdate={handleUpdateClick} />
          {selectedRecommendation && selectedRecommendation.recommendationId === recommendation.recommendation_id && (
            <UpdateRecommendationForm recommendationToUpdate={selectedRecommendation} onSubmit={handleFormSubmit} />
          )}
        </div>
      ))}
    </>
  );
};

export default RecommendationList;

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
