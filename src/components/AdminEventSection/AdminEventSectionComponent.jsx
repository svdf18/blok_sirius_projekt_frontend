import GlobalStyle from '../../styles/globalStyles';
import { EventContainer, EventContainerGrid, CalendarContainer, TodayContainer, UpcomingContainer } from '../EventSection/EventElements';
import { ShowEvents } from '../../api/ShowEvents.jsx';
import ActionMenuComponent from '../Menu/ActionMenu/ActionMenuComponent.jsx';
import EventList from '../../api/EventList.jsx';
import EventDateList from '../../api/EventDateList.jsx';
import CreateEventForm from '../../utils/FormUtil/EventCreateComponent.jsx';
import 'react-calendar/dist/Calendar.css';
import CalendarComponent from '../../api/CalendarComponent.jsx';

const AdminEventSection = () => {
  const menuItems = [
    { title: 'Create Event', formComponent: CreateEventForm },
  ];

  const { date, setDate } = ShowEvents();

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
            <EventDateList selectedDate={date} />
          </TodayContainer>

          <CalendarContainer>
            <CalendarComponent onDateChange={handleCalendarDateChange} />
          </CalendarContainer>

          <UpcomingContainer>
            <EventList selectedDate={date} />
          </UpcomingContainer>

        </EventContainerGrid>
      </EventContainer>
    </>
  );
};

export default AdminEventSection;
