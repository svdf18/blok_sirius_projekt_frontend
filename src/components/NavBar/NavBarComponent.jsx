import PropTypes from 'prop-types';
import { NavBarContainer, NavBarIconLink, UserIcon, HashtagIcon, MessageIcon } from './NavBarElements';


export const NavBarComponent = ({ isSidebarOpen }) => {
  return (
    <NavBarContainer>
      <NavBarIconLink mobile={isSidebarOpen}>
        <UserIcon />
      </NavBarIconLink>
      <NavBarIconLink mobile={isSidebarOpen}>
        <HashtagIcon />
      </NavBarIconLink>
      <NavBarIconLink mobile={isSidebarOpen}>
        <MessageIcon />
      </NavBarIconLink>
    </NavBarContainer>
  );
};

NavBarComponent.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};
