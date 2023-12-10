import { useState, useEffect } from 'react';
import { getEvents } from './EventApis.jsx';
import EventCard from '../utils/EventCardUtil/EventCardComponent.jsx';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent.jsx';
import { sortByDateTime } from '../utils/DateUtil/FormatDateComponent.jsx';
import PropTypes from 'prop-types';

const EventDateList = ({ selectedDate }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      const previousEvents = [...events];

      if (!areArraysEqual(previousEvents, data)) {
        setEvents(data);
      }

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
}, [events]);

  const handleUpdateClick = (eventId, eventProps) => {
    console.log('handleUpdateClick called:', eventId, eventProps);
    setSelectedEvent({ eventId, ...eventProps });
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

// Sort events by date and time using the utility function
const sortedEvents = sortByDateTime(events);

const filteredEvents = sortedEvents.filter((event) => {
  const eventDate = new Date(event.date);
  return (
    eventDate.getFullYear() === selectedDate.getFullYear() &&
    eventDate.getMonth() === selectedDate.getMonth() &&
    eventDate.getDate() === selectedDate.getDate()
  );
});

  const handleCloseDetailView = () => {
    console.log('Closing detail view');
    setSelectedEvent(null);
  };

  return (
        <>
  {selectedEvent ? (
    <EventDetails
      selectedEvent={selectedEvent}
      handleCloseDetailView={handleCloseDetailView}
    />
  ) : (
    <>
    <h2>Events on this date:</h2>
      {filteredEvents.map((event) => (
        <div key={event.event_id}>
          <EventCard 
          event={event} 
          onUpdate={handleUpdateClick} 
          onDetailsClick={() => setSelectedEvent(event)} />
          {selectedEvent && selectedEvent.eventId === event.event_id && (
            <UpdateEventForm 
            eventToUpdate={selectedEvent} 
            onSubmit={handleFormSubmit} />
          )}
        </div>
      ))}
    </>
      )}
    </>
  );
};

const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  return (
    <div>
      <h3>Event Details</h3>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {selectedEvent.date}</p>
      <p>Begins at: {selectedEvent.start_time}</p>
      <p>Ends at: {selectedEvent.end_time}</p>
      <p>Location: {selectedEvent.location}</p>
      <button onClick={handleCloseDetailView}>Close</button>
    </div>
  );
};

EventDetails.propTypes = {
  selectedEvent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};

EventDateList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export default EventDateList;