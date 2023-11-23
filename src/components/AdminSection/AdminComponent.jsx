import { AdminContainer, AdminH1Container, AdminH1, } from './AdminElements.jsx';
import GlobalStyle from '../../styles/globalStyles.jsx';
import Card from '../../utils/CardUtil/CardComponent.jsx';


const AdminSection = () => {

  
  return (
    <>
    <GlobalStyle/>
      <AdminContainer id='/'>
        <AdminH1Container>
        <AdminH1>Sirius</AdminH1>
        </AdminH1Container>
        <Card color="white" buttonText="Manage People Directory" buttonRoute="/people-directory" />
        <Card color="green" buttonText="Manage Knowledge Hub" buttonRoute="/knowledge-hub" />
      </AdminContainer>
    </>
  );
};

export default AdminSection;