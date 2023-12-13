import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEvents } from './EventApis';
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';
import { sortByDateTime } from '../utils/DateUtil/FormatDateComponent.jsx';
import { EventDetails } from './EventDetails.jsx';

const EventList = ({ selectedDate, showButtons }) => {
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

    // Update the events state with the updated event
    const updatedEvents = events.map(event =>
      event.event_id === updatedEvent.event_id ? updatedEvent : event
    );
    setEvents(updatedEvents);

    // set selectedEvent to null to hide the EventDetails view
    setSelectedEvent(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

// sort events by date and time
const sortedEvents = sortByDateTime(events);

const upcomingFilteredEvents = sortedEvents.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate > selectedDate;
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
          <h2>Upcoming events</h2>
          {upcomingFilteredEvents.map((event) => (
            <div key={event.event_id} >
              <EventCard
                event={event}
                onUpdate={handleUpdateClick}
                setSelectedEventProp={setSelectedEvent}
                showButtons={showButtons}
              />
              {selectedEvent && selectedEvent.eventId === event.event_id && (
                <UpdateEventForm
                  eventToUpdate={selectedEvent}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

EventList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  showButtons: PropTypes.bool.isRequired,
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export default EventList;