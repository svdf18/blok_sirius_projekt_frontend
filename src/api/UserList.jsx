import PropTypes from 'prop-types';
import axios from 'axios';
import UserCard from "../utils/UserCardUtil/UserCardComponent.jsx"
import { endpoint } from './endpoint.jsx';
import { useState, useEffect } from 'react';

const UserList = () => {
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

  return (
    <>
      {users.map(user => (
        <UserCard key={user.user_id} user={user} />
      ))}
    </>
  );
}

UserList.propTypes = {
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
    // user_image: PropTypes.string.isRequired, // Assuming user_image is stored as a base64-encoded string
  }).isRequired,
};

export default UserList;
