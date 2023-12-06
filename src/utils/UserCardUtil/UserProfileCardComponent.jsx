import { useUser } from '../../services/Auth/UserContext';
import {
  UserProfileCardContainer,
  UserProfileCardTitle,
  UserProfileCardText,
} from './UserProfileCardElements';
import useSignOut from '../../hooks/useSignOut';

const UserProfileCardComponent = () => {
  const { user } = useUser();
  const { handleSignOut, error } = useSignOut();

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
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <UserProfileCardText>User not logged in</UserProfileCardText>
      )}
    </UserProfileCardContainer>
  );
};

export default UserProfileCardComponent;
