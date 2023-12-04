import GlobalStyle from "../../styles/globalStyles.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";
import RecommendationList from "../../api/RecommendationsList.jsx";


const RecommendationsSection = () => {
  return (
    <>
      <GlobalStyle />
      <DirectoryContainer id="recommendations">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent />
          </ActionMenuGridContainer>
            <DirectoryGrid>
              <RecommendationList/>
            </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
    </>
  );
};

export default RecommendationsSection
