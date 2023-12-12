import GlobalStyle from "../../styles/globalStyles"
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "./PeopleDirectoryElements";
import UserList from "../../api/UserList.jsx"
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent";



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
              <UserList showButtons={false}/>
            </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default PeopleDirectorySection
