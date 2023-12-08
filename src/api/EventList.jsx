import { useState, useEffect } from 'react';
import { getEvents } from './EventApis.jsx';
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';

export const EventList = () => {
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
    <>
      {events.map((event) => (
        <div key={event.event_id}>
          <EventCard event={event} onUpdate={handleUpdateClick} />
          {selectedEvent && selectedEvent.eventId === event.event_id && (
            <UpdateEventForm eventToUpdate={selectedEvent} onSubmit={handleFormSubmit} />
          )}
        </div>
      ))}
    </>
  );
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}