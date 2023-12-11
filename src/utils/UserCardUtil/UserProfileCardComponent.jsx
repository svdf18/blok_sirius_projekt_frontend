import { useState } from 'react';
import { useUser } from '../../services/Auth/UserContext';
import {
  UserProfileCardContainer,
  UserProfileCardTitle,
  UserProfileCardText,
  UserProfileCardLoading,
  LogSubmitButton,
  UserProfileCardSubtitle,
  UserProfileCardImage,
} from './UserProfileCardElements';
import useSignOut from '../../hooks/useSignOut';

const UserProfileCardComponent = () => {
  const { user } = useUser();
  const { handleSignOut } = useSignOut();
  const [loading, setLoading] = useState(false);

  const handleSignOutWithLoading = async () => {
    try {
      setLoading(true);
      await handleSignOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserProfileCardContainer user_type={user?.user_type}>
      {user ? (
        <div>
          <UserProfileCardTitle>{user.first_name} {user.last_name}</UserProfileCardTitle>
          <UserProfileCardSubtitle>{user.user_type}</UserProfileCardSubtitle>
          <UserProfileCardImage src={user.user_image} alt={`Profile of ${user.first_name} ${user.last_name}`} />
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
        <UserProfileCardTitle>User not logged in</UserProfileCardTitle>
      )}
    </UserProfileCardContainer>
  );
};

export default UserProfileCardComponent;
