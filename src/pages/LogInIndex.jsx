import { SidebarButtonComponent } from "../components/Menu/Sidebar/SideBarButtonComponent";
import Sidebar from "../components/Menu/Sidebar/SideBarComponent";
import SignInComponent from "../services/Auth/SignInComponent";
import { useState } from "react";
import UserProfileCardComponent from "../utils/UserCardUtil/UserProfileCardComponent";
import { NavBarComponent } from "../components/Menu/NavBar/NavBarComponent";

const KnowledgeHubIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <SignInComponent/>
      <UserProfileCardComponent/>
      <SidebarButtonComponent onClick={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
      <NavBarComponent isSidebarOpen={isOpen}/>
    </div>
  )
}

export default KnowledgeHubIndex
