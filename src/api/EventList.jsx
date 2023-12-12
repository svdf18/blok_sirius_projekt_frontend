import { useState, useEffect } from 'react';
import { getEvents } from './EventApis';
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';
import { sortByDateTime } from '../utils/DateUtil/FormatDateComponent.jsx';
import PropTypes from 'prop-types';
import { useUser } from '../services/Auth/UserContext.jsx'
import { checkInvitation, markAttendance } from './UserApis.jsx';

const EventList = ({ selectedDate }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userContext = useUser();

  const currentUserId = userContext.user?.user_id;
  console.log(`Current user ${currentUserId}.`);

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

    // Set selectedEvent to null to hide the EventDetails view
    setSelectedEvent(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

// Sort events by date and time
const sortedEvents = sortByDateTime(events);

const upcomingFilteredEvents = sortedEvents.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate > selectedDate;
});

  const handleCloseDetailView = () => {
    console.log('Closing detail view');
    setSelectedEvent(null);
  };

  const handleCheckInvitation = async () => {
    console.log('Checking invitation status');
    console.log('User ID:', currentUserId);
    console.log('Event ID:', selectedEvent.event_id);
    console.log('User context:', userContext);

    try {
      const invitationStatus = await checkInvitation(userContext, selectedEvent.event_id);

      // Handle the invitation status as needed
      if (invitationStatus.isInvited) {
        console.log(`User ${currentUserId} is invited to event ${selectedEvent.event_id}`);
        // User is invited, mark attendance
        const attendanceStatus = await markAttendance(userContext, selectedEvent.event_id);
        console.log('Attendance Status:', attendanceStatus);
      } else {
        console.log(`User ${currentUserId} is not invited to event ${selectedEvent.event_id}`);
        // Add your logic for a user not invited
      }
    } catch (error) {
      console.error('Error checking invitation:', error.message);
      // Handle the error as needed
    }
  };



  return (
    <>
      {selectedEvent ? (
        <EventDetails
          selectedEvent={selectedEvent}
          handleCloseDetailView={handleCloseDetailView}
          currentUserId={currentUserId}
          handleCheckInvitation={handleCheckInvitation}
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

const EventDetails = ({ selectedEvent, handleCloseDetailView, handleCheckInvitation }) => {
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
      <button onClick={handleCheckInvitation}>Attend</button>
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
  handleCheckInvitation: PropTypes.func.isRequired,
};

EventList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export default EventList;