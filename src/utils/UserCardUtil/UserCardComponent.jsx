import { useState } from "react";
import PropTypes from "prop-types";
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText } from "./UserCardElements";

const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <UserCardContainer user_type={user.user_type} expanded={expanded} onClick={handleCardClick}>
      <UserCardTitle>
        {user.first_name} {user.last_name}
      </UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>
      {expanded && (
        <>
          <UserCardText>Phone: {user.phone}</UserCardText>
          <UserCardText>Birthdate: {user.birthdate}</UserCardText>
          <UserCardText>
            Address: {user.street}, {user.postal_code}
          </UserCardText>
        </>
      )}
    </UserCardContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    postal_code: PropTypes.number.isRequired,
    user_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
