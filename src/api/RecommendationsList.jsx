import { useState, useEffect } from 'react';
import { getRecommendations } from './RecommendationApis.jsx';
import RecommendationCard from '../utils/RecommendationCardUtil/RecommendationCardComponent.jsx';
import UpdateRecommendationForm from '../utils/FormUtil/RecommendationUpdateComponent.jsx';
import styled from "styled-components";
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types';

const RecommendationList = ({ showButtons }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const data = await getRecommendations();
        const previousRecommendations = [...recommendations];

        if (!areArraysEqual(previousRecommendations, data)) {
          setRecommendations(data);
          setFilteredRecommendations(data); // Initialize filtered recommendations with all recommendations
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
      <MasonryContainerGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredRecommendations.map((recommendation) => (
          <div key={recommendation.recommendation_id}>
            <RecommendationCard
              recommendation={recommendation}
              onUpdate={handleUpdateClick}
              showButtons={showButtons}
            />
            {selectedRecommendation &&
              selectedRecommendation.recommendationId === recommendation.recommendation_id && (
                <UpdateRecommendationForm
                  recommendationToUpdate={selectedRecommendation}
                  onSubmit={handleFormSubmit}
                />
              )}
          </div>
        ))}
      </MasonryContainerGrid>
    </>
  );
};

export default RecommendationList;

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//// SOS styling

const MasonryContainerGrid = styled(Masonry)`
    display: flex;
    max-width: 62vw;
    margin: 0 auto;
    margin-left: 65px;
    gap: 5px;
    justify-content: center;
    align-items: ${({ breakpoint }) => breakpoint !== 2100 && 'flex-start'};

    .my-masonry-grid_column {
        background-clip: padding-box;
    }

    @media screen and (max-width: 1440px) {
    max-width: 87vw;
  }
`;

const breakpointColumnsObj = {
  default: 2,
  1080: 2,
  720: 1,
};

RecommendationList.propTypes = {
  showButtons: PropTypes.bool.isRequired,
}