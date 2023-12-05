import PropTypes from 'prop-types';
import 'react-calendar/dist/Calendar.css';

const DateSection = ({ handleEventClick, todayEvents }) => {
  return (
    <>
      <h2>Todays Events</h2>
      <ul>
        {todayEvents.map((event) => (
          <li key={event.event_id} onClick={() => handleEventClick(event)}>
            {event.title} - {event.date} at {event.time}
          </li>
        ))}
      </ul>
    </>
  );
};

DateSection.propTypes = {
  todayEvents: PropTypes.array.isRequired,
  handleEventClick: PropTypes.func.isRequired,
};

export default DateSection;
