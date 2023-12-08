import GlobalStyle from '../../styles/globalStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from './EventElements';
import { ShowEvents } from '../../api/ShowEvents';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';

const EventSection = () => {
  const { date, setDate} = ShowEvents();

  return (
    <>
      <GlobalStyle />

      <EventContainer>
        <EventContainerGrid>

          <ActionMenuComponent />

          <TodayContainer>
            <EventList/>
          </TodayContainer>

          <CalendarContainer>
            <Calendar onChange={setDate} value={date} />
          </CalendarContainer>

          <UpcomingContainer>
            <EventList/>
          </UpcomingContainer>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default EventSection;