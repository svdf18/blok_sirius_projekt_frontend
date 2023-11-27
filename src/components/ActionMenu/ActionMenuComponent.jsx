import { ActionMenuContainer, ActionMenuLogoStar, StarIcon, ActionMenuLogo } from './ActionMenuElements';
import SiriusLogo from '../../assets/sirius_logo.png'


const ActionMenuComponent = () => {
  return (
    <ActionMenuContainer>
      <ActionMenuLogoStar>
        <StarIcon/>
      </ActionMenuLogoStar>
      <ActionMenuLogo>
        <img src={SiriusLogo}/>
      </ActionMenuLogo>
    </ActionMenuContainer> 
  )
}

export default ActionMenuComponent;
