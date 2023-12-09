import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getEvents } from './EventApis';
import { ShowEvents } from './ShowEvents';
import { formatDateFrontend, formatTimeFrontend } from '../utils/DateUtil/FormatDateComponent'
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';

export const UpcomingSection = ({ handleCloseDetailView, handleEventClick, onUpdate }) => {
  const { upcomingEvents } = ShowEvents();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents((previousEvents) => {
        if (!areArraysEqual(previousEvents, data)) {
          return data;
        }
        return previousEvents;
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  const intervalId = setInterval(fetchEvents, 2000);

  fetchEvents();

  return () => clearInterval(intervalId);
}, []);

  const handleUpdateClick = (eventId, eventProps) => {
    console.log('handleUpdateClick called:', eventId, eventProps);
    setSelectedEvent({ eventId: eventId, ...eventProps });
  };

  const handleFormSubmit = async (updatedEvent) => {
    console.log('handleFormSubmit called:', updatedEvent);
    setSelectedEvent(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div>
      {selectedEvent ? (
        <EventDetails selectedEvent={selectedEvent} handleCloseDetailView={handleCloseDetailView} />
      ) : (
        <>
          <h2>Upcoming Events</h2>
          <ul>
            {events.map((event) => (
            <li key={event.event_id}>
              <EventCard event={event} onUpdate={handleUpdateClick} />
              {selectedEvent && selectedEvent.eventId === event.event_id && (
                <UpdateEventForm eventToUpdate={selectedEvent} onSubmit={handleFormSubmit} />
              )}
            </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

UpcomingSection.propTypes = {
  selectedEvent: PropTypes.object,
  handleEventClick: PropTypes.func.isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  return (
    <div>
      <h3>Event Details</h3>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {formatDateFrontend(selectedEvent.date)}</p>
      <p>Begins at: {formatTimeFrontend(selectedEvent.start_time)}</p>
      <p>Ends at: {formatTimeFrontend(selectedEvent.end_time)}</p>
      <p>Location: {selectedEvent.location}</p>
      <button onClick={handleCloseDetailView}>Close</button>
    </div>
  );
};

EventDetails.propTypes = {
  selectedEvent: PropTypes.shape({
    event_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    location: PropTypes.string,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};

export default UpcomingSection;