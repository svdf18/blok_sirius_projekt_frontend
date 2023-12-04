import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../components/Menu/Sidebar/SideBarComponent.jsx';
import { SidebarButtonComponent } from '../components/Menu/Sidebar/SideBarButtonComponent.jsx';
// import { NavBarComponent } from "../components/Menu/NavBar/NavBarComponent.jsx";

const EventIndex = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1>Events and Calendar</h1>
      <Calendar onChange={setDate} value={date} />
      <SidebarButtonComponent onClick={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <NavBarComponent isSidebarOpen={isOpen} /> */}
    </>
  );
};

export default EventIndex;
