import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardContent, CardIconLink, PlusIcon, BookIcon, GlobeIcon, CalendarIcon, UsersIcon } from './CardElements.jsx';

const Card = ({ title, content, color, size, linkPath, backgroundImage, icon }) => {
  // Define a mapping between the icon prop values and the corresponding icon components
  const iconMap = {
    plus: <PlusIcon />,
    book: <BookIcon />,
    globe: <GlobeIcon />,
    calendar: <CalendarIcon />,
    users: <UsersIcon />,
  };

  // Use the icon prop to get the corresponding icon component, default to PlusIcon if not specified
  const IconComponent = iconMap[icon] || <PlusIcon />;

  return (
    <CardContainer color={color} size={size} backgroundImage={backgroundImage}>
      <CardIconLink>{IconComponent}</CardIconLink>
      <CardTitle to={linkPath}>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.oneOf(['green', 'grey', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  linkPath: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  icon: PropTypes.oneOf(['plus', 'book', 'globe', 'calendar', 'users']), // Add this line for the icon prop
};

Card.defaultProps = {
  color: 'green',
  size: 'medium',
  icon: 'plus', // Set a default icon value if needed
};

export default Card;
