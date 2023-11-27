import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText } from "../UserCardUtil/UserCardElements.jsx";
import Form from "../../components/Form/FormComponent.jsx";

const UserCard = ({ user, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(user.user_id);
  };

  const handleUpdate = () => {
    onUpdate(user.user_id);
  };


    // Format the birthdate for display
    const formattedBirthdate = (() => {
    const sqlDate = user.birthdate; // Assuming user.birthdate is in the format 'YYYY-MM-DD'
    const jsDate = new Date(sqlDate);
    return jsDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  })();

  return (
    <UserCardContainer user_type={user.user_type}>
      <UserCardTitle>{user.first_name} {user.last_name}</UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>
      <UserCardText>Phone: {user.phone}</UserCardText>
      <UserCardText>Birthdate: {formattedBirthdate}</UserCardText>
      <UserCardText>Address: {user.street}, {user.postal_code}</UserCardText>

      {/* Add the delete and update buttons */}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </UserCardContainer>
  );
};

const AdminUserList = () => {
  const endpoint = "http://localhost:3306";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${endpoint}/users`)
      .then((response) => {
        console.log('Data received:', response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`${endpoint}/users/${userId}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

const toggleFormVisibility = () => {
  setIsFormVisible((prevVisibility) => !prevVisibility);
};

  const [selectedUser, setSelectedUser] = useState(null);

const handleUpdate = (userId) => {
  const userToUpdate = users.find((user) => user.user_id === userId);
  setSelectedUser(userToUpdate);
  toggleFormVisibility(); // This sets isFormVisible to true
};


const handleFormSubmit = async (formData) => {
  try {
    // Make an HTTP request to update the user data on the server
    const response = await axios.put(`http://localhost:3306/users/${formData.user_id}`, formData);
    
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