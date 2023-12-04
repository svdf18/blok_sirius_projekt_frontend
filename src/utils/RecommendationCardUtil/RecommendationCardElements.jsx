import styled from 'styled-components';

const getCategoryColor = (category) => {
  switch (category) {
    case 'food':
      return '#FFD700'; // Gold
    case 'travel':
      return '#87CEEB'; // Sky Blue
    case 'culture':
      return '#20B2AA'; // Light Sea Green
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
  min-width: 12rem;
  border: none;
  border-radius: 28px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;

  &:hover {
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const RecommendationCardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: inherit;
`;

export const RecommendationCardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: inherit;
`;
