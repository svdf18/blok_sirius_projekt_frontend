import { useState } from 'react';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
import { NavBarComponent } from '../components/Menu/NavBar/NavBarComponent.jsx';
import UserProfileSection from '../components/UserProfileSection/UserProfileSectionComponent.jsx';


const UserProfileIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <UserProfileSection/>
    <SidebarButtonComponent onClick={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
    <NavBarComponent isSidebarOpen={isOpen} />
  </>
 );
};

export default UserProfileIndex;