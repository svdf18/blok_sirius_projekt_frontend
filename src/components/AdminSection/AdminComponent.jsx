import { HomeContainer, HomeContainerGrid, breakpointColumnsObj } from '../HomeSection/HomeElements.jsx';
import GlobalStyle from '../../styles/globalStyles.jsx';
import Card from '../../utils/CardUtil/CardComponent.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import SiriusDecor from '../../assets/sirius_decor.jpeg'


const AdminSection = () => {

  
  return (
    <>
    <GlobalStyle backgroundColor="yellow"/>
      <HomeContainer backgroundColor="yellow" id='admin-dashboard'>
      <HomeContainerGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <ActionMenuComponent></ActionMenuComponent>
          <Card title="Manage Recommendations"color="white" size="medium" linkPath="/admin-recommendations"/>
          <Card title="Manage Events & Calendar" color="green" size="medium" linkPath="/people-directory"/>
          <Card title="" color="white" size="small" linkPath="/people-directory" backgroundImage={SiriusDecor}/>
          <Card title="Manage Knowledge Hub" color="grey" size="large" linkPath="/people-directory" />
          <Card title="Manage Human Resources System" color="green" size="medium" linkPath="/people-directory" />
          <Card title="Manage Learning & Development Community" color="white" size="medium" linkPath="/people-directory" />
          <Card title="Manage People Directory" color="grey" size="large" linkPath="/admin-dashboard/people-directory" />
        </HomeContainerGrid>
      </HomeContainer>
    </>
  );
};

export default AdminSection;