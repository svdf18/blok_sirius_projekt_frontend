import GlobalStyle from "../../styles/globalStyles.jsx";
import UserList from "../../api/UserList.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import CreateUserForm from "../../utils/FormUtil/UserCreateComponent.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";

const AdminPeopleDirectorySection = () => {
  const menuItems = [
    { title: 'Create User', formComponent: CreateUserForm },
  ];

  return (
    <>
      <GlobalStyle backgroundColor="yellow" />
      <DirectoryContainer id="admin-dashboard-people-directory" backgroundColor="yellow">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent menuItems={menuItems} />
          </ActionMenuGridContainer>
          <DirectoryGrid>
            <UserList showButtons={true}/>
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>

    </>
  );
};

export default AdminPeopleDirectorySection;