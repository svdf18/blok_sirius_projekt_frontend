import PropTypes from 'prop-types';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText, ButtonCardContainer } from "./UserCardElements";
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';
import { deleteUser } from '../../api/UserApis';
import ModalComponent from '../ModalUtil/FormModalComponent';
import UserUpdateForm from '../FormUtil/UserUpdateComponent';
import { useState, useEffect } from 'react';
import { formatDateFrontend } from '../DateUtil/FormatDateComponent';

const UserCard = ({ user, onUpdate }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

const openUpdateModal = () => {
  console.log('Opening modal');
  setSelectedUser(user);
  setIsUpdateModalOpen(true);
};

  const closeUpdateModal = () => {
    console.log('Closing modal');
    console.log('Before - selectedUser:', selectedUser);
    console.log('Before - isUpdateModalOpen:', isUpdateModalOpen);
  
    setSelectedUser(null);
  };

  useEffect(() => {
    if (selectedUser === null) {
      setIsUpdateModalOpen(false);
    }
  }, [selectedUser]);

  return (
    <UserCardContainer user_type={user.user_type} onClick={() => console.log("Card clicked")}>
      <UserCardTitle> {user.first_name} {user.last_name}</UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>
      <UserCardText>Phone: {user.phone}</UserCardText>
      <UserCardText>Birthdate: {formatDateFrontend(user.birthdate)}</UserCardText>
      <UserCardText>Address: {user.street}, {user.postal_code}</UserCardText>
      <ButtonCardContainer>
        <DeleteButtonComponent
          deleteFunction={(itemId) => {
            console.log(`Deleting user with ID ${itemId}`);
            deleteUser(itemId);
          }}
          itemId={user.user_id}
          itemType="user"
        />
        <UpdateButtonComponent onUpdate={() => openUpdateModal()} itemId={user.user_id} itemProps={user} />
        <ModalComponent
          isOpen={isUpdateModalOpen}
          onRequestClose={closeUpdateModal}
          formComponent={(props) => <UserUpdateForm userToUpdate={selectedUser} {...props} />}
          onSubmit={(updatedUser) => {
            console.log('Form submitted:', updatedUser);
            onUpdate(updatedUser);
            closeUpdateModal();
          }}
        />
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