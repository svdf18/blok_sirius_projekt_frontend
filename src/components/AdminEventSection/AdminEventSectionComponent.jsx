import GlobalStyle from '../../styles/globalStyles';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from '../EventSection/EventElements';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import EventDateList from '../../api/EventDateList.jsx';
import CalendarComponent from '../../api/CalendarComponent.jsx';
import 'react-calendar/dist/Calendar.css';
import CreateEventForm from '../../utils/FormUtil/EventCreateComponent.jsx';
import { useState } from 'react';

const AdminEventSection = () => {
  const menuItems = [
    { title: 'Create Event', formComponent: CreateEventForm },
  ];

  const [date, setDate] = useState(new Date());

  const handleCalendarDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <>
      <GlobalStyle backgroundColor="yellow" />
      <EventContainer backgroundColor="yellow">
        <EventContainerGrid>
          <ActionMenuComponent menuItems={menuItems} />

          <TodayContainer>
            <EventDateList 
            selectedDate={date} />
          </TodayContainer>

          <CalendarContainer>
            <CalendarComponent 
            onDateChange={handleCalendarDateChange} />
          </CalendarContainer>

          <UpcomingContainer>
            <EventList 
            selectedDate={date} />
          </UpcomingContainer>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default AdminEventSection;