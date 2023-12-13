import AdminPeopleDirectorySection from "../components/AdminPeopleDirectorySection/AdminPeopleDirectoryComponent.jsx"
import { useState } from 'react';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
import { NavBarComponent } from "../components/Menu/NavBar/NavBarComponent.jsx";

const AdminPeopleDirectoryIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)

  }
  return (
    <>
      <AdminPeopleDirectorySection />
      <SidebarButtonComponent onClick={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBarComponent isSidebarOpen={isOpen} />
    </>
  )
}

export default AdminPeopleDirectoryIndex
