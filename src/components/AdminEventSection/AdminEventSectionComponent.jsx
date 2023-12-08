import GlobalStyle from '../../styles/globalStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from '../EventSection/EventElements';
import { ShowEvents } from '../../api/ShowEvents.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import CreateEventForm from '../../utils/FormUtil/EventCreateComponent.jsx';

const AdminEventSection = () => {
  const menuItems = [
    { title: 'Create Event', formComponent: CreateEventForm },
  ];
  const { date, setDate } = ShowEvents();


  return (
    <>
      <GlobalStyle backgroundColor="yellow"/>
      <EventContainer backgroundColor="yellow">
        <EventContainerGrid>
          <ActionMenuComponent menuItems={menuItems} />

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

export default AdminEventSection;
