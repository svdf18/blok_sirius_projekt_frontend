import { useState } from "react";
import GlobalStyle from "../../styles/globalStyles.jsx";
<<<<<<< Updated upstream
import { AdminPeopleDirectoryContainer, AdminPeopleDirectoryH1Container, AdminPeopleDirectoryH1, AdminPeopleDirectoryGrid } from "./AdminPeopleDirectoryElements.jsx";
import AdminUserList from "../../utils/AdminUserCardUtil/AdminUserCardComponent.jsx";
=======
import UserList from "../Api/UserList.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../ActionMenu/ActionMenuComponent.jsx";
>>>>>>> Stashed changes
import Form from "../Form/FormComponent.jsx";

const AdminPeopleDirectorySection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
<<<<<<< Updated upstream
      <GlobalStyle />
      <AdminPeopleDirectoryContainer id="admin-people-directory">
        <AdminPeopleDirectoryH1Container>
          <AdminPeopleDirectoryH1>Admin People Directory</AdminPeopleDirectoryH1>
          <button onClick={toggleFormVisibility}>Create User</button>
          <AdminPeopleDirectoryGrid>
            {isFormVisible && <Form />}
            <AdminUserList />
          </AdminPeopleDirectoryGrid>
        </AdminPeopleDirectoryH1Container>
      </AdminPeopleDirectoryContainer>
=======
    <GlobalStyle backgroundColor="yellow"/>
      <DirectoryContainer id="admin-dashboard-people-directory" backgroundColor="yellow">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
          <ActionMenuComponent title="Create User" formComponent={Form} />
          </ActionMenuGridContainer>
          <DirectoryGrid>
            <UserList/>
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
>>>>>>> Stashed changes
    </>
  );
};

export default AdminPeopleDirectorySection;
