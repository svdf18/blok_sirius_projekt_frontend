import GlobalStyle from "../../styles/globalStyles.jsx";
import { ActionMenuGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";
import RecommendationList from "../../api/RecommendationsList.jsx";
import { RecommendationsDirectoryContainer, RecommendationsDirectoryGridContainer } from "./RecommendationsElements.jsx";

const RecommendationsSection = () => {
  
  return (
    <>
      <GlobalStyle />
      <RecommendationsDirectoryContainer id="recommendations">
        <RecommendationsDirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent />
          </ActionMenuGridContainer>
              <RecommendationList showButtons={false}/>
        </RecommendationsDirectoryGridContainer>
      </RecommendationsDirectoryContainer>
    </>
  );
};

export default RecommendationsSection
