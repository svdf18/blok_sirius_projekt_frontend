import styled from 'styled-components';

const getCategoryColor = (category) => {
  switch (category) {
    case 'Food':
      return '#fbc2c2'; 
    case 'Travel':
      return '#cae7f3'; 
    case 'Culture':
      return '#c6c2b6'; // Light Sea Green
    default:
      return '#4F5E6A'; // Default color
  }
};

export const RecommendationCardContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: getCategoryColor(props.category),
  },
}))`
  width: auto;
  text-align: left;
  max-width: auto;
  border: none;
  border-radius: 28px;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;
`;

export const RecommendationCardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: inherit;
  border-bottom: 1px solid;
`;

export const RecommendationCardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: inherit;
`;

export const RecommendationUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RecommendationUserImage = styled.img`
  width: 15%; 
  height: 100%; 
  object-fit: cover;
  object-position: center top; 
  position: relative;
  aspect-ratio: 1;
  border-radius: 28px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  
`;

export const RecommendationUserName = styled.p`
  font-style: italic;
  font-size: 12px;
  color: inherit;
  flex-direction: top;
`

export const RecommendationCardURL = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonCardContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 3rem;
`;
