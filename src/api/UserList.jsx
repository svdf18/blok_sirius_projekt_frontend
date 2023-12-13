import { useState, useEffect } from 'react';
import { getUsers } from './UserApis.jsx';
import UserCard from '../utils/UserCardUtil/UserCardComponent.jsx';
import UpdateUserForm from '../utils/FormUtil/UserUpdateComponent.jsx';
import styled from "styled-components";
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types';

const UserList = ({ showButtons }) => {
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
    <MasonryContainerGrid
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {users.map(user => (
        <div key={user.user_id}>
          <UserCard 
            user={user} 
            onUpdate={handleUpdateClick}
            showButtons={showButtons} />
          {selectedUser && selectedUser.userId === user.user_id && (
            <UpdateUserForm userToUpdate={selectedUser} onSubmit={handleFormSubmit} />
          )}
        </div>
      ))}
      </MasonryContainerGrid>
    </>
  );
};

export default UserList;

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}



const MasonryContainerGrid = styled(Masonry)`
    display: flex;
    min-width: 60vw;
    margin: 0 auto;
    gap: 5px;
    justify-content: center;
    align-items: ${({ breakpoint }) => breakpoint !== 2100 && 'flex-start'};

    .my-masonry-grid_column {
        background-clip: padding-box;
    }

    @media screen and (max-width: 1440px) {
    min-width: 60vw;
    }

    @media screen and (max-width: 1080px) {
    min-width: 80vw;
  }
`;

const breakpointColumnsObj = {
  default: 3,
  1440: 2,
  720: 1,
};

UserList.propTypes = {
  showButtons: PropTypes.bool.isRequired,
}
