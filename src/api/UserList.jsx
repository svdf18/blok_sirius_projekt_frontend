import { useState, useEffect } from 'react';
import { getUsers } from './UserApis.jsx';
import UserCard from '../utils/UserCardUtil/UserCardComponent.jsx';
import UpdateUserForm from '../utils/FormUtil/UserUpdateComponent.jsx';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        const previousUsers = [...users];

        if (!areArraysEqual(previousUsers, data)) {
          setUsers(data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchUsers, 2000);

    fetchUsers();

    return () => clearInterval(intervalId);
  }, [users]);

  const handleUpdateClick = (userId, userProps) => {
    setSelectedUser({ userId, ...userProps });
  };

  const handleFormSubmit = async (updatedUser) => {
    console.log(updatedUser);
    setSelectedUser(null);
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

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
