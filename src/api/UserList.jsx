import PropTypes from 'prop-types';
import UserCard from "../utils/UserCardUtil/UserCardComponent.jsx"
import { getUsers } from './UserApis.jsx';
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      {users.map(user => (
        <UserCard key={user.user_id} user={user} />
      ))}
    </>
  );
}

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
