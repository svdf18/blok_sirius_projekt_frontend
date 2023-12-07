import AdminEventSection from '../components/AdminEventSection/AdminEventSectionComponent.jsx';
import { useState } from 'react';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
import { NavBarComponent } from '../components/Menu/NavBar/NavBarComponent.jsx';

const AdminEventIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <AdminEventSection />
    <SidebarButtonComponent onClick={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
    <NavBarComponent isSidebarOpen={isOpen} />
  </>
 );
};

export default AdminEventIndex;