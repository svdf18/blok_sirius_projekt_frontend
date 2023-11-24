import PeopleDirectorySection from "../components/PeopleDirectorySection/PeopleDirectoryComponent.jsx"
import { useState } from 'react';
import Sidebar from '../components/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/SideBar/SideBarButtonComponent.jsx';

const PeopleDirectoryIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)

  }
  return (
    <>
      <PeopleDirectorySection />
      <SidebarButtonComponent onClick={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}

export default PeopleDirectoryIndex
