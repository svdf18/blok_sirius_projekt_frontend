import GlobalStyle from "../../styles/globalStyles.jsx";
import RecommendationList from "../../api/RecommendationsList.jsx";
import { ActionMenuGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";
import CreateRecommendationForm from "../../utils/FormUtil/RecommendationCreateComponent.jsx";
import { RecommendationsDirectoryContainer, RecommendationsDirectoryGridContainer } from "../RecommendationsSection/RecommendationsElements.jsx"; 

const AdminRecommendationsComponent = () => {
  const menuItems = [
    { title: 'Food', formComponent: CreateRecommendationForm },
    { title: 'Cultural', formComponent: CreateRecommendationForm },
    { title: 'Travel', formComponent: CreateRecommendationForm },
  ];

  return (
    <>
      <GlobalStyle backgroundColor="yellow" />
      <RecommendationsDirectoryContainer id="admin-recommendations" backgroundColor="yellow">
        <RecommendationsDirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent menuItems={menuItems} />
          </ActionMenuGridContainer>
          
            <RecommendationList/>
      
        </RecommendationsDirectoryGridContainer>
      </RecommendationsDirectoryContainer>
      
    </>
  )
}

export default AdminRecommendationsComponent
