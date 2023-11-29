import GlobalStyle from "../../styles/globalStyles"
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "./PeopleDirectoryElements.jsx";
import UserList from "../../api/UserList.jsx"
import ActionMenuComponent from "../ActionMenu/ActionMenuComponent";



const PeopleDirectorySection = () => {
  return (
    <>
      <GlobalStyle />
      <DirectoryContainer id="people-directory">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent />
          </ActionMenuGridContainer>
            <DirectoryGrid>
              <UserList />
              <ActionMenuComponent />
              <ActionMenuComponent />
              <ActionMenuComponent />
              <ActionMenuComponent />
            </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default PeopleDirectorySection
