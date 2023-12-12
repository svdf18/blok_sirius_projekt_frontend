import { HomeContainer, HomeContainerGrid, breakpointColumnsObj } from './HomeElements.jsx';
import GlobalStyle from '../../styles/globalStyles';
import Card from '../../utils/CardUtil/CardComponent.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import SiriusPeople from '../../assets/sirius_people.jpeg'

const HomeSection = () => {

  
  return (
    <>
    <GlobalStyle/>
      <HomeContainer id='/'>
        <HomeContainerGrid
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">

          <ActionMenuComponent/>
        
          <Card title="Recommendations"color="white" size="medium" linkPath="/recommendations" icon="globe" />
          <Card title="Events & Calendar" color="green" size="medium" linkPath="/events-calendar" icon="calendar"/>
          <Card title="" color="grey" size="small" linkPath="/people-directory" backgroundImage={SiriusPeople}/>
          <Card title="Log In" color="grey" size="large" linkPath="/log-in" icon="book" />
          <Card title="Human Resources System" color="green" size="medium" linkPath="/people-directory" />
          <Card title="Learning & Development Community" color="white" size="medium" linkPath="/people-directory" />
          <Card title="People Directory" color="grey" size="large" linkPath="/people-directory" icon="users"/>
        </HomeContainerGrid>
      </HomeContainer>
    </>
  );
};

export default HomeSection;