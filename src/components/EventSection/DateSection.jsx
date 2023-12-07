import PropTypes from 'prop-types';
import { formatDateFrontend, formatTime } from '../../utils/DateUtil/FormatDateComponent';

const DateSection = ({ handleEventClick, todayEvents }) => {
  return (
    <>
      <h2>Events on this date:</h2>
      <ul>
        {todayEvents.map((event) => (
          <li key={event.event_id} onClick={() => handleEventClick(event)}>
            {formatDateFrontend(event.date)} at {formatTime(event.start_time)} - {event.title} ({event.location})
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