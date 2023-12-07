import { useState } from 'react';
import { useUser } from '../../services/Auth/UserContext';
import {
  UserProfileCardContainer,
  UserProfileCardTitle,
  UserProfileCardText,
  UserProfileCardLoading,
  LogSubmitButton,
  UserProfileCardSubtitle
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
      <UserProfileCardTitle>{user.first_name} {user.last_name}</UserProfileCardTitle>
      {user ? (
        <div>
          <UserProfileCardSubtitle>{user.user_type}</UserProfileCardSubtitle>
          <UserProfileCardText>Email: {user.email}</UserProfileCardText>
          <UserProfileCardText>Phone: {user.phone}</UserProfileCardText>
          <UserProfileCardText>Street: {user.street}</UserProfileCardText>
          <UserProfileCardText>Postal Code: {user.postal_code}</UserProfileCardText>
          
          {loading ? (
            <UserProfileCardLoading>Signing Out...</UserProfileCardLoading>
          ) : (
            <LogSubmitButton onClick={handleSignOutWithLoading}>Sign Out</LogSubmitButton>
          )}
        </div>
      ) : (
        <UserProfileCardText>User not logged in</UserProfileCardText>
      )}
    </UserProfileCardContainer>
  );
};

export default UserProfileCardComponent;
