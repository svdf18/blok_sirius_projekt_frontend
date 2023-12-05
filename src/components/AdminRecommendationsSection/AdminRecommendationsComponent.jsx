import GlobalStyle from "../../styles/globalStyles.jsx";
import RecommendationList from "../../api/RecommendationsList.jsx";
import { ActionMenuGridContainer, DirectoryContainer, DirectoryGrid, DirectoryGridContainer } from "../PeopleDirectorySection/PeopleDirectoryElements.jsx";
import ActionMenuComponent from "../Menu/ActionMenu/ActionMenuComponent.jsx";
import CreateRecommendationForm from "../../utils/FormUtil/RecommendationCreateComponent.jsx";

const AdminRecommendationsComponent = () => {
  const menuItems = [
    { title: 'Food', formComponent: CreateRecommendationForm },
    { title: 'Cultural', formComponent: CreateRecommendationForm },
    { title: 'Travel', formComponent: CreateRecommendationForm },
  ];

  return (
    <>
      <GlobalStyle backgroundColor="yellow" />
      <DirectoryContainer id="admin-recommendations" backgroundColor="yellow">
        <DirectoryGridContainer>
          <ActionMenuGridContainer>
            <ActionMenuComponent menuItems={menuItems} />
          </ActionMenuGridContainer>
          <DirectoryGrid>
            <RecommendationList/>
          </DirectoryGrid>
        </DirectoryGridContainer>
      </DirectoryContainer>
      
    </>
  )
}

export default AdminRecommendationsComponent
