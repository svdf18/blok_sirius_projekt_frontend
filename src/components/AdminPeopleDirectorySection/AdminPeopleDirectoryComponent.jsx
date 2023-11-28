import GlobalStyle from "../../styles/globalStyles.jsx";
import AdminUserList from "../../utils/AdminUserCardUtil/AdminUserCardComponent.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../ActionMenu/ActionMenuComponent.jsx";
import Form from "../Form/FormComponent.jsx";

const AdminPeopleDirectorySection = () => {

  return (
    <>
    <GlobalStyle backgroundColor="yellow"/>
      <DirectoryContainer id="admin-dashboard-people-directory" backgroundColor="yellow">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
          <ActionMenuComponent title="Create User" formComponent={Form} />
          </ActionMenuGridContainer>
          <DirectoryGrid>
            <AdminUserList/>
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default AdminPeopleDirectorySection;
