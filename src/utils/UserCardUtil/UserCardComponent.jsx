import PropTypes from 'prop-types';
import { useState } from "react";
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText, ButtonCardContainer } from "./UserCardElements";
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';

const UserCard = ({ user, onDelete, onUpdate }) => {
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
          <ButtonCardContainer>
          <DeleteButtonComponent onDelete={onDelete} itemId={user.user_id} />
          <UpdateButtonComponent onUpdate={onUpdate} itemId={user.user_id} />
          </ButtonCardContainer>
        </>
      )}
    </UserCardContainer>
  );
}
  
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
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;

