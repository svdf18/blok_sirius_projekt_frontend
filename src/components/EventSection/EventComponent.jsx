import { useState } from 'react';
import GlobalStyle from '../../styles/globalStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, ActionMenuGridContainer, CalendarContainer, TodayContainer, UpcomingContainer, breakpointColumnsObj } from './EventElements';
import { useEventList } from '../../api/EventList';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import DateSection from './DateSection.jsx';
import UpcomingSection from './UpcomingSection.jsx';

const EventSection = () => {
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
      <GlobalStyle />

      <EventContainer>
        <EventContainerGrid
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <ActionMenuGridContainer>
            <ActionMenuComponent />
          </ActionMenuGridContainer>

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

export default EventSection;