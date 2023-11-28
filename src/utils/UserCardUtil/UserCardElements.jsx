import styled from 'styled-components';

const getColorByUserType = (userType) => {
  switch (userType) {
    case 'admin':
      return '#C2DFD3'; // Green
    case 'standard':
      return '#4F5E6A'; // Grey
    default:
      return '#4F5E6A'; // Default color
  }
};

const getTextColorByUserType = (userType) => {
  switch (userType) {
    case 'admin':
      return '#4F5E6A'; // Dark Grey
    case 'standard':
      return '#F7F7F7'; // White
    default:
      return '#F7F7F7'; // Default text color
  }
};

export const UserCardContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: getColorByUserType(props.user_type),
    color: getTextColorByUserType(props.user_type),
  },
}))`
  width: 15vw;
  text-align: left;
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

export const UserCardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserCardSubtitle = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid;
`;

export const UserCardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: inherit;
`;
