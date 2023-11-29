import { useState, useEffect } from "react";
import axios from 'axios';
import Form from "../../utils/FormUtil/FormComponent.jsx";
import { getUsers, deleteUser, updateUser } from "./UserApis.jsx"
import UserCard from "../../utils/UserCardUtil/UserCardComponent.jsx";

const AdminUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        console.log('Data received:', data);
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (userId) => {
    deleteUser(userId)
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
  toggleFormVisibility();
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
          showButtons={true}
        />
      ))}
            {isFormVisible && <Form userToUpdate={selectedUser} onSubmit={handleFormSubmit} />}
    </>
  );
};

export default AdminUserList;