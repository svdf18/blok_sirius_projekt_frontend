import styled from 'styled-components';

const getColor = (color) => {
  switch (color) {
      case 'admin':
          return '#4F5E6A'; // Grey
      case 'user':
          return '#F7F7F7'; // White
      default:
          return '#4F5E6A'; // Default color (grey)
  }
};

const getTextColor = (color) => {
  switch (color) {
      case '#F7F7F7': // White
          return '#4F5E6A';
      case '#4F5E6A': // Grey
          return '#F7F7F7';
      default:
          return '#F7F7F7';
  }
};


export const UserCardContainer = styled.div`
    border: none;
    border-radius: 12px;
    padding: 20px;
    margin: 20px;
    background-color: ${(props) => getColor(props.color)};
    color: ${(props) => getTextColor(props.color)};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UserCardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const UserCardSubtitle = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const UserCardText = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: inherit;
`;

export const UserCardImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin-bottom: 10px;
`;