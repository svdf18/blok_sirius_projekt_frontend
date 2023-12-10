import GlobalStyle from "../../styles/globalStyles"
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "./PeopleDirectoryElements";
import UserList from "../../api/UserList.jsx"
import CreateUserForm from "../../utils/FormUtil/UserCreateComponent";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent";



const PeopleDirectorySection = () => {
  const menuItems = [
    { title: 'Create User', formComponent: CreateUserForm },
  ];
  return (
    <>
      <GlobalStyle />
      <DirectoryContainer id="people-directory">
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

export default PeopleDirectorySection
