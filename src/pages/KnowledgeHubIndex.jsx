import { SidebarButtonComponent } from "../components/Menu/Sidebar/SideBarButtonComponent";
import Sidebar from "../components/Menu/Sidebar/SideBarComponent";
import SignInComponent from "../services/Auth/SignInComponent"
import SignUpComponent from "../services/Auth/SignUpComponent"
import TestUserDisplay from "../services/Auth/TestUserDisplay"
import { useState } from "react";

const KnowledgeHubIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <SignUpComponent/>
      <SignInComponent/>
      <TestUserDisplay/>
      <SidebarButtonComponent onClick={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
    </div>
  )
}

export default KnowledgeHubIndex
