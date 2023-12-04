import PropTypes from 'prop-types';
import { RecommendationCardContainer, RecommendationCardTitle, RecommendationCardText } from './RecommendationCardElements.jsx';

const RecommendationCard = ({ recommendation }) => {
  return (
    <RecommendationCardContainer>
      <RecommendationCardTitle>{recommendation.title}</RecommendationCardTitle>
      <RecommendationCardText>{recommendation.content}</RecommendationCardText>
    </RecommendationCardContainer>
  );
};

RecommendationCard.propTypes = {
  recommendation: PropTypes.shape({
    recommendation_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    // Add more fields as needed
  }).isRequired,
};

export default RecommendationCard;