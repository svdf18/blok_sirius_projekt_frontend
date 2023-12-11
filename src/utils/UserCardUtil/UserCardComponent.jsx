import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText, ButtonCardContainer, UserCardIconLink, UserCardImage } from "./UserCardElements";
import { DeleteButtonComponent } from '../ButtonUtil/DeleteButtonComponent';
import { UpdateButtonComponent } from '../ButtonUtil/UpdateButtonComponent';
import { deleteUser } from '../../api/UserApis';
import ModalComponent from '../ModalUtil/FormModalComponent';
import UserUpdateForm from '../FormUtil/UserUpdateComponent';
import { formatDateFrontend } from '../DateUtil/FormatDateComponent';
import { useUser } from '../../services/Auth/UserContext';

const UserCard = ({ user, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Track the expanded/folded state
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const userContext = useUser();


  const toggleCardView = () => {
    setIsExpanded(!isExpanded);
  };

  const openUpdateModal = () => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    if (selectedUser === null) {
      setIsUpdateModalOpen(false);
    }
  }, [selectedUser]);

  return (
    <UserCardContainer user_type={user.user_type} onClick={() => console.log("Card clicked")}>
      <UserCardIconLink onClick={toggleCardView} />
      {isExpanded ? (
        <>
          <UserCardTitle> {user.first_name} {user.last_name}</UserCardTitle>
          <UserCardSubtitle>{user.department}</UserCardSubtitle>
          <UserCardText>Email: {user.email}</UserCardText>
        </>
      ) : null}
      {!isExpanded && (
        <>
          <UserCardTitle> {user.first_name} {user.last_name}</UserCardTitle>
          <UserCardSubtitle>{user.department}</UserCardSubtitle>
          <UserCardImage src={user.user_image} alt={`Profile of ${user.first_name} ${user.last_name}`} />
          <UserCardText>Email: {user.email}</UserCardText>
          <UserCardText>Phone: {user.phone}</UserCardText>
          <UserCardText>Birthdate: {formatDateFrontend(user.birthdate)}</UserCardText>
          <UserCardText>Address: {user.street}, {user.postal_code}</UserCardText>
          <ButtonCardContainer>
        <DeleteButtonComponent
              deleteFunction={(itemId) => {
                console.log(`Deleting user with ID ${itemId}`);
                
                // Check if userContext.user is defined before accessing user_id
                const currentUserId = userContext.user?.user_id;
                console.log(`Current user ${currentUserId}.`);
                if (currentUserId !== undefined) {
                  deleteUser(itemId, currentUserId);
                } else {
                  console.error("Current user information is missing.");
                }
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
    user_image: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
