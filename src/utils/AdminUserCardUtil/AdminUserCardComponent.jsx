<<<<<<< Updated upstream:src/utils/AdminUserCardUtil/AdminUserCardComponent.jsx
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText } from "../UserCardUtil/UserCardElements.jsx";
import Form from "../../components/Form/FormComponent.jsx";
import { getUsers, deleteUser, updateUser } from "../../components/Api/userApis.jsx"
import { UpdateButtonComponent } from "../ButtonUtil/UpdateButtonComponent.jsx";
import { DeleteButtonComponent } from "../ButtonUtil/DeleteButtonComponent.jsx";

const UserCard = ({ user, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(user.user_id);
  };
  
  const handleUpdate = () => {
    onUpdate(user.user_id);
  };

  return (
    <UserCardContainer user_type={user.user_type}>
      <UserCardTitle>{user.first_name} {user.last_name}</UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>
      <UserCardText>Phone: {user.phone}</UserCardText>
      <UserCardText>Birthdate: {user.birthdate}</UserCardText>
      <UserCardText>Address: {user.street}, {user.postal_code}</UserCardText>
      <DeleteButtonComponent onDelete={handleDelete} itemId={user.user_id} />
      <UpdateButtonComponent onUpdate={handleUpdate} itemId={user.user_id} />
    </UserCardContainer>
  );
};
=======
import { useState } from "react";
import axios from 'axios';
import Form from "../Form/FormComponent.jsx";
import { deleteUser, updateUser } from "./UserApis.jsx"
import UserCard from "../../utils/UserCardUtil/UserCardComponent.jsx";
import { useFetchUsers } from "./UserApis.jsx";
>>>>>>> Stashed changes:src/components/Api/AdminUserList.jsx

const AdminUserList = () => {
  const users = useFetchUsers();

  const handleDelete = (userId) => {
    deleteUser(userId)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };


  const [selectedUser, setSelectedUser] = useState(null);

const handleUpdate = (userId) => {
  const userToUpdate = users.find((user) => user.user_id === userId);
  setSelectedUser(userToUpdate);
  toggleFormVisibility();
};

const [isFormVisible, setIsFormVisible] = useState(false);

const toggleFormVisibility = () => {
  setIsFormVisible((prevVisibility) => !prevVisibility);
};


const handleFormSubmit = async (formData) => {
  try {
    // Make an HTTP request to update the user data on the server
    const response = await updateUser(formData);
    
    if (response.status === 200) {
      console.log("User updated successfully:", response.data);
      // If the update is successful, you might want to update the user in your local state as well
      setUsers((prevUsers) => {
        return prevUsers.map((user) => (user.user_id === formData.user_id ? formData : user));
      });
      
      // Hide the form after successful update
      toggleFormVisibility();
    } else {
      console.error("Failed to update user:", response.status, response.data);
    }
  } catch (error) {
    console.error("Error updating user:", error.message);
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response.status, error.response.data);
    } else {
      console.error("Non-Axios Error:", error.message);
    }
  }
};
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.user_id}
          user={user}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
            {isFormVisible && <Form userToUpdate={selectedUser} onSubmit={handleFormSubmit} />}
    </>
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
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AdminUserList;