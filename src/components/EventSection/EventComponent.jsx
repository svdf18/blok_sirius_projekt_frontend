import GlobalStyle from '../../styles/globalStyles';
import CalendarComponent from '../../api/CalendarComponent';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from './EventElements';
import { ShowEvents } from '../../api/ShowEvents';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import EventDateList from '../../api/EventDateList.jsx';

const EventSection = () => {
  const { date, setDate, upcomingEvents} = ShowEvents();
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
            <EventDateList date={date} />
          </TodayContainer>

          <CalendarContainer>
            <CalendarComponent onDateChange={handleCalendarDateChange} />
          </CalendarContainer>

          <UpcomingContainer>
            <EventList date={date} upcomingEvents={upcomingEvents} />
          </UpcomingContainer>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default EventSection;