import GlobalStyle from "../../styles/globalStyles.jsx";
import AdminUserList from "../../api/AdminUserList.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../ActionMenu/ActionMenuComponent.jsx";
import Form from "../Form/FormComponent.jsx";
import SimpleForm from "../../utils/FormUtil/UserFormComponent.jsx";

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
            <AdminUserList />
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default AdminPeopleDirectorySection;

