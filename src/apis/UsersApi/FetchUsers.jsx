import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

const UserList = ({ onUsersFetched }) => {
  const endpoint = "http://localhost:3306";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/users`)
      .then((response) => {
        console.log("Data received:", response.data);
        onUsersFetched(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [endpoint, onUsersFetched]);

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.user_id} user={user} />
      ))}
    </>
  );
};

UserList.propTypes = {
  onUsersFetched: PropTypes.func.isRequired,
};

export default UserList;
