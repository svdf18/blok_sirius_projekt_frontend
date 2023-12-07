import { useState } from 'react';
import { useUser } from '../../services/Auth/UserContext';
import {
  UserProfileCardContainer,
  UserProfileCardTitle,
  UserProfileCardText,
  UserProfileCardLoading,
} from './UserProfileCardElements';
import useSignOut from '../../hooks/useSignOut';

const UserProfileCardComponent = () => {
  const { user } = useUser();
  const { handleSignOut } = useSignOut();
  const [loading, setLoading] = useState(false);

  const handleSignOutWithLoading = async () => {
    setLoading(true);
    await handleSignOut();
    setLoading(false);
  };

  return (
    <UserProfileCardContainer user_type={user?.user_type}>
      <UserProfileCardTitle>User Information</UserProfileCardTitle>
      {user ? (
        <div>
          <UserProfileCardText>First Name: {user.first_name}</UserProfileCardText>
          <UserProfileCardText>Last Name: {user.last_name}</UserProfileCardText>
          <UserProfileCardText>Email: {user.email}</UserProfileCardText>
          <UserProfileCardText>Phone: {user.phone}</UserProfileCardText>
          <UserProfileCardText>Street: {user.street}</UserProfileCardText>
          <UserProfileCardText>Postal Code: {user.postal_code}</UserProfileCardText>
          <UserProfileCardText>User Type: {user.user_type}</UserProfileCardText>
          {loading ? (
            <UserProfileCardLoading>Signing Out...</UserProfileCardLoading>
          ) : (
            <button onClick={handleSignOutWithLoading}>Sign Out</button>
          )}
        </div>
      ) : (
        <UserProfileCardText>User not logged in</UserProfileCardText>
      )}
    </UserProfileCardContainer>
  );
};

export default UserProfileCardComponent;
