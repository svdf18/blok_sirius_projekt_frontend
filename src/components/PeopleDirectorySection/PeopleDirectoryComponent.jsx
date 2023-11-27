import GlobalStyle from "../../styles/globalStyles"
import { PeopleDirectoryContainer, PeopleDirectoryGrid } from "./PeopleDirectoryElements.jsx";
import UserList from "../../utils/UserCardUtil/UserCardComponent";



const PeopleDirectorySection = () => {
  return (
    <>
      <GlobalStyle/>
        <PeopleDirectoryContainer id="people-directory">
              <PeopleDirectoryGrid>
                <UserList></UserList>
              </PeopleDirectoryGrid>
        </PeopleDirectoryContainer>
    </>
  )
}

export default PeopleDirectorySection
