import { HomeContainer, HomeH1Container, HomeH1, } from './HomeElements.jsx';
import GlobalStyle from '../../styles/globalStyles';
import Card from '../../utils/CardUtil/CardComponent.jsx';


const HomeSection = () => {

  
  return (
    <>
    <GlobalStyle/>
      <HomeContainer id='/'>
        <HomeH1Container>
        <HomeH1>Sirius</HomeH1>
        </HomeH1Container>
        <Card color="white" buttonText="People Directory" buttonRoute="/people-directory" />
        <Card color="green" buttonText="Knowledge Hub" buttonRoute="/knowledge-hub" />
      </HomeContainer>
    </>
  );
};

export default HomeSection;