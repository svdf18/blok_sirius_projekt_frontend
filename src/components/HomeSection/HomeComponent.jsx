import { HomeContainer, HomeContainerGrid, breakpointColumnsObj } from './HomeElements.jsx';
import GlobalStyle from '../../styles/globalStyles';
import Card from '../../utils/CardUtil/CardComponent.jsx';
import ActionMenuComponent from '../ActionMenu/ActionMenuComponent.jsx';


const HomeSection = () => {

  
  return (
    <>
    <GlobalStyle/>
      <HomeContainer id='/'>
        <HomeContainerGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        <ActionMenuComponent></ActionMenuComponent>
        <Card title="Knowledge Hub"color="white" size="medium" linkPath="/knowledge-hub" />
        <Card title="People Directory" color="green" size="medium" linkPath="/people-directory" />
        <Card title="People Directory" color="grey" size="small" linkPath="/people-directory" />
        <Card title="People Directory" color="grey" size="large" linkPath="/people-directory" />
        <Card title="People Directory" color="green" size="medium" linkPath="/people-directory" />
        <Card title="People Directory" color="white" size="medium" linkPath="/people-directory" />
        <Card title="People Directory" color="grey" size="large" linkPath="/people-directory" />
        </HomeContainerGrid>
      </HomeContainer>
    </>
  );
};

export default HomeSection;