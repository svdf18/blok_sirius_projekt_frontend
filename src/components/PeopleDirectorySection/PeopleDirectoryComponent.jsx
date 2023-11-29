import GlobalStyle from "../../styles/globalStyles"
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "./PeopleDirectoryElements.jsx";
import UserList from "../Api/UserList.jsx";
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
              <UserList/>
            </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default PeopleDirectorySection
