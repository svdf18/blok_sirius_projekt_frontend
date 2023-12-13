import GlobalStyle from '../../styles/globalStyles';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer, ActionMenuGridContainer, EventDisplayGrid } from './EventElements';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import EventDateList from '../../api/EventDateList.jsx';
import 'react-calendar/dist/Calendar.css';
import EventCalendar from '../../api/EventCalendar';
import { useState } from 'react';

const EventSection = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <>
      <GlobalStyle />
      <EventContainer>
        <EventContainerGrid>
          <ActionMenuGridContainer>
            <ActionMenuComponent />

            <CalendarContainer>
              <EventCalendar 
              onDateChange={handleCalendarDateChange} />
            </CalendarContainer>

          </ActionMenuGridContainer>
        <EventDisplayGrid>
          <TodayContainer>
            <EventDateList 
            selectedDate={date} 
            showButtons={false} />
          </TodayContainer>

          <UpcomingContainer>
            <EventList 
            selectedDate={date}
            showButtons={false} />
          </UpcomingContainer>
          </EventDisplayGrid>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default EventSection;