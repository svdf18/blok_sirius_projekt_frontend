import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaBook, FaGlobe, FaCalendar, FaUsers } from 'react-icons/fa';

const ICON_TYPES = {
  plus: FaPlusCircle,
  book: FaBook,
  globe: FaGlobe,
  calendar: FaCalendar,
  users: FaUsers,
};

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
  text-align: left;
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

  color: #C2DFD3;
  border-radius: 1.5rem;
  transition: all 300ms linear;

  background-color: ${(props) => getColor(props.color)};

  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(220, 198, 198, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
    transform: scale(1.2);
  }
`

export const PlusIcon = styled(ICON_TYPES.plus)`
   transform: scale(1.5);
`;

export const BookIcon = styled(ICON_TYPES.book)`
  background-color: #4F5E6A;
   transform: scale(1.5);
`;

export const GlobeIcon = styled(ICON_TYPES.globe)`
  background-color: #f7f7f7;
  color: #4F5E6A;
  transform: scale(1.5);

  &:hover {
    color: #2b2b2b;
  }
`;

export const CalendarIcon = styled(ICON_TYPES.calendar)`
   transform: scale(1.5);
   background-color: #C2DFD3;
   color: #4F5E6A;

   &:hover {
    color: #2b2b2b;
  }
`;

export const UsersIcon = styled(ICON_TYPES.users)`
  background-color: #4F5E6A;
  transform: scale(1.5);
`;