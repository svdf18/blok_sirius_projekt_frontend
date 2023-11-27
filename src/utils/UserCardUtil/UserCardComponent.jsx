import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { UserCardContainer, UserCardTitle, UserCardSubtitle, UserCardText } from "./UserCardElements";

const UserCard = ({ user }) => {
  return (
    <UserCardContainer user_type={user.user_type}>
      <UserCardTitle>{user.first_name} {user.last_name}</UserCardTitle>
      <UserCardSubtitle>{user.user_type}</UserCardSubtitle>
      <UserCardText>Email: {user.email}</UserCardText>
      <UserCardText>Phone: {user.phone}</UserCardText>
      <UserCardText>Birthdate: {user.birthdate}</UserCardText>
      <UserCardText>Address: {user.street}, {user.postal_code}</UserCardText>
      {/* <UserCardText>User Preferences: {user.user_preferences}</UserCardText> */}
      {/* <UserCardImage src={`data:image/png;base64,${user.user_image}`} alt="User" /> */}
    </UserCardContainer>
  );
}

const UserList = () => {
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
  }, [])

  return (
    <>
      {users.map(user => (
        <UserCard key={user.user_id} user={user} />
      ))}
    </>
  );
}

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
    // user_preferences: PropTypes.string,
    user_type: PropTypes.string.isRequired,
    // user_image: PropTypes.string.isRequired, // Assuming user_image is stored as a base64-encoded string
  }).isRequired,
};

export default UserList;