import AdminSection from '../components/AdminSection/AdminComponent.jsx';
import { useState } from 'react';
import Sidebar from '../components/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/SideBar/SideBarButtonComponent.jsx';
import { NavBarComponent } from '../components/NavBar/NavBarComponent.jsx';

const AdminIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <AdminSection />
    <SidebarButtonComponent onClick={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
    <NavBarComponent isSidebarOpen={isOpen} />
  </>
 );
};

export default AdminIndex;