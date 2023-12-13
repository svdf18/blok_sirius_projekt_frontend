import PropTypes from 'prop-types';
import { RecommendationCardContainer, RecommendationCardTitle, RecommendationCardText, ButtonCardContainer, RecommendationUserName, RecommendationUserContainer, RecommendationUserImage, RecommendationCardURL, RecommendationCardTitleContainer, RecommendationCardCategory } from './RecommendationCardElements.jsx';
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';
import { deleteRecommendation } from '../../api/RecommendationApis';
import { getUserById } from '../../api/UserApis.jsx';
import ModalComponent from '../ModalUtil/FormModalComponent.jsx';
import { useState, useEffect } from 'react';
import UpdateRecommendationForm from '../FormUtil/RecommendationUpdateComponent.jsx';


const RecommendationCard = ({ recommendation, onUpdate, showButtons }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [taggedUserName, setTaggedUserName] = useState('');
  const [taggedUserImage, setTaggedUserImage] = useState('');

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

  useEffect(() => {
    const fetchTaggedUserName = async () => {
      try {
        const taggedUser = await getUserById(recommendation.tagged_user_id);
        setTaggedUserName(`${taggedUser.first_name} ${taggedUser.last_name}`); 
        setTaggedUserImage(taggedUser.user_image);   // Assuming user_image is the URL
      } catch (error) {
        console.error('Error fetching tagged user details:', error.message);
      }
    };
  
    fetchTaggedUserName();
  }, [recommendation.tagged_user_id]);
  


  return (
    <RecommendationCardContainer category={recommendation.category}>
      <RecommendationCardTitleContainer>
      <RecommendationCardTitle>{recommendation.title}</RecommendationCardTitle>
      <RecommendationCardCategory>{recommendation.category}</RecommendationCardCategory>
      </RecommendationCardTitleContainer>
        <RecommendationUserContainer>
          <RecommendationUserName>Anbefalet af {taggedUserName}</RecommendationUserName>
          <RecommendationUserImage src={taggedUserImage} alt={`Profile of ${taggedUserName}`} />
        </RecommendationUserContainer>
      <RecommendationCardText>{recommendation.content}</RecommendationCardText>
      <RecommendationCardURL href={recommendation.recommendation_url} target="_blank" rel="noopener noreferrer">
        Visit Webpage
      </RecommendationCardURL>
        <ButtonCardContainer>
          {showButtons && (
            <>
              <DeleteButtonComponent
                deleteFunction={(itemId) => {
                  console.log(`Deleting recommendation with ID ${itemId}`);
                  deleteRecommendation(itemId);
                }}
                itemId={recommendation.recommendation_id}
                itemType="recommendation"
              />
              <UpdateButtonComponent onUpdate={() => openUpdateModal()} itemId={recommendation.recommendation_id} itemProps={recommendation} />
            </>
          )}
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
    recommendation_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tagged_user_id: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,

};

export default RecommendationCard;