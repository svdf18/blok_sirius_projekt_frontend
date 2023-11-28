import { useState } from "react";
import GlobalStyle from "../../styles/globalStyles.jsx";
import { AdminPeopleDirectoryContainer, AdminPeopleDirectoryH1Container, AdminPeopleDirectoryH1, AdminPeopleDirectoryGrid } from "./AdminPeopleDirectoryElements.jsx";
import AdminUserList from "../../utils/AdminUserCardUtil/AdminUserCardComponent.jsx";
import Form from "../Form/FormComponent.jsx";

const AdminPeopleDirectorySection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
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
    </>
  );
};

export default AdminPeopleDirectorySection;
