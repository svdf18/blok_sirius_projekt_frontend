import { SidebarButtonComponent } from "../components/Menu/Sidebar/SideBarButtonComponent";
import Sidebar from "../components/Menu/Sidebar/SideBarComponent";
import SignInComponent from "../services/Auth/SignInComponent";
import { useState } from "react";
import UserProfileCardComponent from "../utils/UserCardUtil/UserProfileCardComponent";

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
    </div>
  )
}

export default KnowledgeHubIndex
