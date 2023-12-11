import GlobalStyle from '../../styles/globalStyles';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from './EventElements';
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
          <ActionMenuComponent />

          <TodayContainer>
            <EventDateList 
            selectedDate={date} />
          </TodayContainer>

          <CalendarContainer>
            <EventCalendar 
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

export default EventSection;