import { useState } from 'react';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
import { NavBarComponent } from "../components/Menu/NavBar/NavBarComponent.jsx";
import RecommendationsSection from '../components/RecommendationsSection/RecommendationsComponent.jsx';


const RecommendationsIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)

  }
  return (
    <>
      <RecommendationsSection/>
      <SidebarButtonComponent onClick={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBarComponent isSidebarOpen={isOpen} />
    </>
  )
}

export default RecommendationsIndex
