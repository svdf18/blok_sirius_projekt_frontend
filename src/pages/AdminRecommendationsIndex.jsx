import AdminRecommendationsSection from "../components/AdminRecommendationsSection/AdminRecommendationsComponent.jsx"
import { useState } from 'react';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
import { NavBarComponent } from "../components/Menu/NavBar/NavBarComponent.jsx";

const AdminRecommendationsIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)

  }
  return (
    <>
      <AdminRecommendationsSection />
      <SidebarButtonComponent onClick={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBarComponent isSidebarOpen={isOpen} />
    </>
  )
}

export default AdminRecommendationsIndex
