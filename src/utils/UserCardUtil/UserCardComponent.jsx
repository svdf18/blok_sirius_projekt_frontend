import PropTypes from 'prop-types';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText, ButtonCardContainer } from "./UserCardElements";
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';
import { deleteUser } from '../../api/UserApis';

const UserCard = ({ user, onUpdate }) => {
  // No need for the expanded state and handleCardClick function

  return (
    <UserCardContainer user_type={user.user_type} onClick={() => console.log("Card clicked")}>
      <UserCardTitle>
        {user.first_name} {user.last_name}
      </UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>

      {/* No need for the expanded check */}
      <UserCardText>Phone: {user.phone}</UserCardText>
      <UserCardText>Birthdate: {user.birthdate}</UserCardText>
      <UserCardText>
        Address: {user.street}, {user.postal_code}
      </UserCardText>
      <ButtonCardContainer>
        <DeleteButtonComponent
          deleteFunction={(itemId) => {
            console.log(`Deleting user with ID ${itemId}`);
            deleteUser(itemId);
          }}
          itemId={user.user_id}
          itemType="user"
        />
        <UpdateButtonComponent onUpdateButton={onUpdate} itemId={user.user_id} itemProps={user} />
      </ButtonCardContainer>
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
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
