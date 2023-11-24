import GlobalStyle from "../../styles/globalStyles"
import { PeopleDirectoryContainer, PeopleDirectoryH1Container, PeopleDirectoryH1, PeopleDirectoryGrid } from "./PeopleDirectoryElements.jsx";
import UserList from "../../utils/UserCardUtil/UserCardComponent";



const PeopleDirectorySection = () => {
  return (
    <>
      <GlobalStyle/>
        <PeopleDirectoryContainer id="people-directory">
          <PeopleDirectoryH1Container>
            <PeopleDirectoryH1>People Directory</PeopleDirectoryH1>
              <PeopleDirectoryGrid>
                <UserList></UserList>
              </PeopleDirectoryGrid>
          </PeopleDirectoryH1Container>
        </PeopleDirectoryContainer>
    </>
  )
}

export default PeopleDirectorySection
