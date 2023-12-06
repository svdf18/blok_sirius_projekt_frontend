import { useUser } from './UserContext.jsx';

const TestUserDisplay = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>User Information</h2>
      {user ? (
        <div>
          <p>Username: {user.first_name}</p>
          <p>User Type: {user.user_type}</p>
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default TestUserDisplay;
