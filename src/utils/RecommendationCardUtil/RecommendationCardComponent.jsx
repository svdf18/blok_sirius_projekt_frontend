import PropTypes from 'prop-types';
import { RecommendationCardContainer, RecommendationCardTitle, RecommendationCardText, ButtonCardContainer } from './RecommendationCardElements.jsx';
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';
import { deleteRecommendation } from '../../api/RecommendationApis';
import ModalComponent from '../ModalUtil/FormModalComponent.jsx';
import { useState, useEffect } from 'react';
import UpdateRecommendationForm from '../FormUtil/RecommendationUpdateComponent.jsx';

const RecommendationCard = ({ recommendation, onUpdate }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

  const openUpdateModal = () => {
    console.log('Opening modal');
    setSelectedRecommendation(recommendation);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    console.log('Closing modal');
    console.log('Before - selectedRecommendation:', selectedRecommendation);
    console.log('Before - isUpdateModalOpen:', isUpdateModalOpen);
  
    setSelectedRecommendation(null);
  };

  useEffect(() => {
    if (selectedRecommendation === null) {
      setIsUpdateModalOpen(false);
    }
  }, [selectedRecommendation]);

  return (
    <RecommendationCardContainer category={recommendation.category}>
      <RecommendationCardTitle>{recommendation.title}</RecommendationCardTitle>
      <RecommendationCardText>{recommendation.content}</RecommendationCardText>
        <ButtonCardContainer>
          <DeleteButtonComponent
            deleteFunction={(itemId) => {
              console.log(`Deleting recommendation with ID ${itemId}`);
              deleteRecommendation(itemId);
            }}
            itemId={recommendation.recommendation_id}
            itemType="recommendation"
          />
          <UpdateButtonComponent onUpdate={() => openUpdateModal()} itemId={recommendation.recommendation_id} itemProps={recommendation} />
          <ModalComponent
            isOpen={isUpdateModalOpen}
            onRequestClose={closeUpdateModal}
            formComponent={(props) => <UpdateRecommendationForm recommendationToUpdate={selectedRecommendation} {...props} />}
            onSubmit={(updatedRecommendation) => {
              console.log('Form submitted:', updatedRecommendation);
              onUpdate(updatedRecommendation);
              closeUpdateModal();
            }}
          />
        </ButtonCardContainer>
    </RecommendationCardContainer>
  );
};

RecommendationCard.propTypes = {
  recommendation: PropTypes.shape({
    recommendation_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RecommendationCard;