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

export const UserProfileCardContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: getColorByUserType(props.user_type),
    color: getTextColorByUserType(props.user_type),
  },
}))`
  width: 50%;
  margin: 10% auto;
  text-align: left;
  min-width: 12rem;
  border: none;
  border-radius: 28px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;

  &:hover {
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }
`;

export const UserProfileButtonCardContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 3rem;
`;

export const UserProfileCardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
`;

export const UserProfileCardSubtitle = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid;
`;

export const UserProfileCardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: inherit;
`;

export const UserProfileCardLoading = styled.h1`
  
`

export const LogSubmitButton = styled.button`
  position: relative;
  background-color: #f7f7f7;
  border: none;
  border-radius: 28px;
  font-size: medium;
  padding: 1rem;
  font-weight: bold;
  margin: 1rem auto;
  display: block;
  width: ${({ adaptiveWidth }) => adaptiveWidth ? 'auto' : '30%'};
  box-shadow: 0 0.5px 1px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: #2b2b2b;
    color: #F7F7F7;
    border-radius: 14px;
  }
`;