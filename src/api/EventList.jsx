import { useState, useEffect } from 'react';
import { getEvents } from './EventApis';
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';
import { sortByDateTime } from '../utils/DateUtil/FormatDateComponent.jsx';

const EventList = ({ selectedDate }) => {
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

const upcomingFilteredEvents = sortedEvents.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate > selectedDate;
});

  return (
    <>
      <h2>Upcoming Events</h2>
      {upcomingFilteredEvents.map((event) => (
        <div key={event.event_id}>
          <EventCard 
          event={event} 
          onUpdate={handleUpdateClick} />
          {selectedEvent && selectedEvent.eventId === event.event_id && (
            <UpdateEventForm
              eventToUpdate={selectedEvent}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default EventList;

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}