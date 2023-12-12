import PropTypes from 'prop-types';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SideBarElements";
import { useUser } from '../../../services/Auth/UserContext';

const Sidebar = ({ isOpen, toggle }) => {
  const { user } = useUser();

  return (
    <>
      {isOpen && (
        <SidebarContainer onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
              <SidebarLink to='/people-directory' onClick={toggle}>People Directory</SidebarLink>
              <SidebarLink to='/log-in' onClick={toggle}>Log In</SidebarLink>
              <SidebarLink to="/recommendations" onClick={toggle}>Recommendations</SidebarLink>
              <SidebarLink to="/events-calendar" onClick={toggle}>Events and Calendar</SidebarLink>
              {user && user.user_type === 'admin' && (
                <SidebarLink to='/admin-dashboard' onClick={toggle}>
                  Admin Dashboard
                </SidebarLink>
              )}
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarContainer>
      )}
    </>
  );
};
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;