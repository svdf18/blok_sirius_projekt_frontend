import PropTypes from 'prop-types';
import EventCard from '../../utils/EventCardUtil/EventCardComponent';

const DateSection = ({ handleEventClick, todayEvents }) => {
  return (
    <>
      <h2>Events on this date:</h2>
      <ul>
        {todayEvents.map((event) => (
          <li key={event.event_id}>
            <EventCard event={event} handleEventClick={handleEventClick} />
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
