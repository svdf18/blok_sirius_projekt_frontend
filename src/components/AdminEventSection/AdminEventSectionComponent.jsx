import GlobalStyle from '../../styles/globalStyles';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer, ActionMenuGridContainer, EventDisplayGrid } from '../EventSection/EventElements';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import EventDateList from '../../api/EventDateList.jsx';
import EventCalendar from '../../api/EventCalendar.jsx';
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
          <ActionMenuGridContainer>
            <ActionMenuComponent menuItems={menuItems} />

            <CalendarContainer>
              <EventCalendar onDateChange={handleCalendarDateChange} />
            </CalendarContainer>
          </ActionMenuGridContainer>
          <EventDisplayGrid>
          <TodayContainer>
            <EventDateList 
            selectedDate={date}
             showButtons={true} />
          </TodayContainer>

          

          <UpcomingContainer>
            <EventList 
            selectedDate={date}
            showButtons={true} />
          </UpcomingContainer>
          </EventDisplayGrid>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default AdminEventSection;