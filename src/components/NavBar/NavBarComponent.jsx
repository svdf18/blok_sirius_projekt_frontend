import PropTypes from 'prop-types';
import { NavBarContainer, NavBarIconLink, UserIcon, HashtagIcon, MessageIcon, StarIcon } from './NavBarElements';


export const NavBarComponent = ({ isSidebarOpen }) => {
  return (
    <NavBarContainer>
<NavBarIconLink mobile={isSidebarOpen}>
  <StarIcon />
  <span className="tooltip">Home</span>
</NavBarIconLink>
<NavBarIconLink mobile={isSidebarOpen}>
  <UserIcon />
  <span className="tooltip">Profile</span>
</NavBarIconLink>
<NavBarIconLink mobile={isSidebarOpen}>
  <HashtagIcon />
  <span className="tooltip">Newsfeed</span>
</NavBarIconLink>
<NavBarIconLink mobile={isSidebarOpen}>
  <MessageIcon />
  <span className="tooltip">Messages</span>
</NavBarIconLink>

    </NavBarContainer>
  );
};

NavBarComponent.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};
