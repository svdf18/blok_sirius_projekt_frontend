import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

const cardSizes = {
  small: {
    height: '10rem',
  },
  medium: {
    height: '15rem',
  },
  large: {
    height: '20rem',
  },
};

const getColor = (color) => {
  switch (color) {
    case 'green':
      return '#C2DFD3';
    case 'grey':
      return '#4F5E6A';
    case 'white':
      return '#F7F7F7';
    default:
      return '#4F5E6A';
  }
};

const getTextColor = (color) => {
  switch (color) {
    case 'green':
    case 'white':
      return '#4F5E6A';
    case 'grey':
      return '#F7F7F7';
    default:
      return '#F7F7F7';
  }
};

export const CardContainer = styled.div`
  border: none;
  border-radius: 28px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  color: #4F5E6A;
  box-shadow: 0 1px 3px rgba(40, 36, 36, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  transition: all 30ms linear;

  &:hover {
    box-shadow: 0 2px 4px rgba(220, 198, 198, 0.12), 0 2px 4px rgba(78, 77, 77, 0.24);
  }

  background-color: ${(props) => getColor(props.color)};
  color: ${(props) => getTextColor(props.color)};
  height: ${(props) => cardSizes[props.size]?.height || 'auto'};

  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: cover;
  background-position: center;
`;

export const CardTitle = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: inherit;
`;

export const CardIconLink = styled(Link)`
  position: relative;
  display: flex;
  left: 90%;
  align-items: center;
  justify-content: center;
  height: 1.0rem;
  width: 1.0rem;
  margin-bottom: 0.5rem;
  background-color: #4F5E6A;
  color: #C2DFD3;
  border-radius: 1.5rem;
  transition: all 300ms linear;

  background-color: ${(props) => getColor(props.color)};

  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(220, 198, 198, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  }
`

export const PlusIcon = styled(FaPlusCircle)`
    transform: scale(1.5);
`;