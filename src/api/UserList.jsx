import PropTypes from 'prop-types';
import UserCard from "../utils/UserCardUtil/UserCardComponent.jsx";
import UpdateUserForm from "../utils/FormUtil/UserUpdateComponent.jsx";
import { getUsers } from './UserApis.jsx';
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      console.log('Data received:', data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();

    const intervalId = setInterval(() => {
      fetchUsers();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleUpdateClick = (userId, userProps) => {
    setSelectedUser({ userId, ...userProps });
  };

  const handleFormSubmit = async (updatedUser) => {
    console.log(updatedUser);
    setSelectedUser(null);
  };

  return (
    <>
      {users.map(user => (
        <div key={user.user_id}>
          <UserCard user={user} onUpdate={handleUpdateClick} />
          {selectedUser && selectedUser.userId === user.user_id && (
            <UpdateUserForm userToUpdate={selectedUser} onSubmit={handleFormSubmit} />
          )}
        </div>
      ))}
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      postal_code: PropTypes.number.isRequired,
      user_type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
