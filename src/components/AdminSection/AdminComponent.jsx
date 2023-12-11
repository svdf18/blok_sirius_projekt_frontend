import { HomeContainer, HomeContainerGrid, breakpointColumnsObj } from '../HomeSection/HomeElements.jsx';
import GlobalStyle from '../../styles/globalStyles.jsx';
import Card from '../../utils/CardUtil/CardComponent.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import SiriusDecor from '../../assets/sirius_decor.jpeg'
import { useUser } from '../../services/Auth/UserContext.jsx';


const AdminSection = () => {
  const { user } = useUser();

  const isAdmin = user && user.user_type === 'admin';

  //render nav and buttons to lead user back to main
  if (!user) {
    // No user is logged in
    return (
      <div>
        <p>Please log in to access this page.</p>
      </div>
    );
  } else if (!isAdmin) {
    // Logged-in user does not have admin privileges
    return (
      <div>
        <p>Unauthorized access. Please log in with an admin account.</p>
      </div>
    );
  }
  
  return (
    <>
    <GlobalStyle backgroundColor="yellow"/>
      <HomeContainer backgroundColor="yellow" id='admin-dashboard'>
      <HomeContainerGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <ActionMenuComponent></ActionMenuComponent>
          <Card title="Manage Recommendations"color="white" size="medium" linkPath="/admin-recommendations" icon="globe"/>
          <Card title="Manage Events & Calendar" color="green" size="medium" linkPath="/admin-events-calendar" icon="calendar"/>
          <Card title="" color="white" size="small" linkPath="/people-directory" backgroundImage={SiriusDecor}/>
          <Card title="Manage Knowledge Hub" color="grey" size="large" linkPath="/people-directory" icon="book" />
          <Card title="Manage Human Resources System" color="green" size="medium" linkPath="/people-directory" />
          <Card title="Manage Learning & Development Community" color="white" size="medium" linkPath="/people-directory" />
          <Card title="Manage People Directory" color="grey" size="large" linkPath="/admin-dashboard/people-directory" icon="users" />
        </HomeContainerGrid>
      </HomeContainer>
    </>
  );
};

export default AdminSection;