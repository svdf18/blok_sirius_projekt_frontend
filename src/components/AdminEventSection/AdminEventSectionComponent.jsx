import { useState } from 'react';
import GlobalStyle from '../../styles/globalStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from '../EventSection/EventElements';
import { useEventList } from '../../api/EventList';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import DateSection from '../EventSection/DateSection.jsx';
import UpcomingSection from '../EventSection/UpcomingSection.jsx';
import CreateEventForm from '../../utils/FormUtil/EventCreateComponent.jsx';

const AdminEventSection = () => {
  const menuItems = [
    { title: 'Create Event', formComponent: CreateEventForm },
  ];
  const { date, setDate, upcomingEvents, todayEvents } = useEventList();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
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
          {/* Today / Date click */}
          <TodayContainer>
            <DateSection
              selectedEvent={selectedEvent}
              handleEventClick={handleEventClick}
              todayEvents={todayEvents}
            />
          </TodayContainer>

          {/* Calendar with events */}
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
            />
          </UpcomingContainer>
        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default AdminEventSection;