import { useState } from 'react';
import GlobalStyle from '../../styles/globalStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from '../EventSection/EventElements';
import { ShowEvents } from '../../api/ShowEvents.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import DateSection from '../EventSection/DateSection.jsx';
import UpcomingSection from '../EventSection/UpcomingSection.jsx';
import CreateEventForm from '../../utils/FormUtil/EventCreateComponent.jsx';

const AdminEventSection = () => {
  const menuItems = [
    { title: 'Create Event', formComponent: CreateEventForm },
  ];
  const { date, setDate, upcomingEvents, todayEvents } = ShowEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleUpdateClick = (eventId, eventProps) => {
    console.log('handleUpdateClick called:', eventId, eventProps);
    // Implement the logic to handle the update
  };

  const handleCloseDetailView = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <GlobalStyle backgroundColor="yellow"/>
      <EventContainer backgroundColor="yellow">
        <EventContainerGrid>
          <ActionMenuComponent menuItems={menuItems} />
          <TodayContainer>
            <DateSection selectedEvent={selectedEvent} handleEventClick={handleEventClick} todayEvents={todayEvents} />
          </TodayContainer>
          <CalendarContainer>
            <Calendar onChange={setDate} value={date} />
          </CalendarContainer>
          <UpcomingContainer>
            <UpcomingSection 
              selectedEvent={selectedEvent}
              handleCloseDetailView={handleCloseDetailView}
              handleEventClick={handleEventClick}
              todayEvents={todayEvents}
              upcomingEvents={upcomingEvents}
              onUpdate={handleUpdateClick}
            />
          </UpcomingContainer>
        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default AdminEventSection;
