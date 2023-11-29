import UserCard from "../../utils/UserCardUtil/UserCardComponent.jsx";
import { useFetchUsers } from './UserApis.jsx';

const UserList = () => {
  const users = useFetchUsers();

  return (
    <>
      {users.map(user => (
        <UserCard key={user.user_id} user={user} showButtons={true} />
      ))}
    </>
  );
}

export default UserList;