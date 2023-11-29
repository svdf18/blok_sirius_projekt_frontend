import PropTypes from 'prop-types';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
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
              <SidebarLink to='/knowledge-hub' onClick={toggle}>Knowledge Hub</SidebarLink>
              <SidebarLink to='/admin-dashboard' onClick={toggle}>Admin Dashboard</SidebarLink>
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
