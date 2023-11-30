import GlobalStyle from "../../styles/globalStyles.jsx";
import UserList from "../../api/UserList.jsx"
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import SimpleForm from "../../utils/FormUtil/UserFormComponent.jsx";
import Form from "../../utils/FormUtil/FormComponent.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";

const AdminPeopleDirectorySection = () => {
  const menuItems = [
    { title: 'Create User', formComponent: Form },
    { title: 'Create User', formComponent: SimpleForm },
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
            <UserList/>
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>

    </>
  );
};

export default AdminPeopleDirectorySection;

