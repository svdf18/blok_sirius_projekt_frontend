import UserCard from "../utils/UserCardUtil/UserCardComponent.jsx";
import UpdateUserForm from "../utils/FormUtil/UserUpdateComponent.jsx";
import { getUsers } from './UserApis.jsx';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
};


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const debouncedFetchUsers = debounce(fetchUsers, 1000);

  useInterval(debouncedFetchUsers, 1000);

  const handleUpdateClick = (userId, userProps) => {
    setSelectedUser({ userId, ...userProps });
  };

  const handleFormSubmit = async (updatedUser) => {
    console.log(updatedUser);
    setSelectedUser(null);
    fetchUsers();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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

export default UserList;