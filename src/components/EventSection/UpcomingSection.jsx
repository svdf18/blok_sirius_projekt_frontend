import PropTypes from 'prop-types';
import 'react-calendar/dist/Calendar.css';
import { useEventList } from '../../api/EventList';

const UpcomingSection = ({ selectedEvent, handleCloseDetailView, handleEventClick }) => {
  const { upcomingEvents } = useEventList();

  return (
    <div>
      {selectedEvent ? (
        <EventDetails selectedEvent={selectedEvent} handleCloseDetailView={handleCloseDetailView} />
      ) : (
        <>
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event) => (
              <li key={event.event_id} onClick={() => handleEventClick(event)}>
                {event.title} - {event.date} at {event.time}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );


};

UpcomingSection.propTypes = {
  selectedEvent: PropTypes.object,
  handleEventClick: PropTypes.func.isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};

const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  return (
    <div>
      <h3>Event Details</h3>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {selectedEvent.date}</p>
      <p>Time: {selectedEvent.time}</p>
      <p>Location: {selectedEvent.location}</p>
      <p>Created At: {selectedEvent.created_at}</p>
      <button onClick={handleCloseDetailView}>Close</button>
    </div>
  );
};

EventDetails.propTypes = {
  selectedEvent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};

export default UpcomingSection;