import { useState, useEffect, useCallback } from 'react';
import { getEvents } from './EventApis';
import EventCard from '../utils/EventCardUtil/EventCardComponent';
import UpdateEventForm from '../utils/FormUtil/EventUpdateComponent';
import { sortByDateTime } from '../utils/DateUtil/FormatDateComponent.jsx';
import PropTypes from 'prop-types';
import { useUser } from '../services/Auth/UserContext.jsx'
import { checkInvitation, markAttendance, getUserById, getAttendingUsers } from './UserApis.jsx';

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

export const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  const [attendingUsers, setAttendingUsers] = useState([]);
  const userContext = useUser();
  const currentUserId = userContext.user?.user_id;
  const [error, setError] = useState(null);

  // fetch user given a user_id
  const fetchUserDetails = async (userId) => {
    try {
      const user = await getUserById(userId);
      console.log(`User details for ${userId}:`, user);
      return { id: userId, details: user };
    } catch (getUserError) {
      console.error(`Error fetching user details for ${userId}:`, getUserError.message);
      setError(`Error fetching user details for ${userId}`);
      return null;
    }
  };

  // fetch the list of users attending the event, useCallback is used to prevent unnecessary rerendering
  const fetchAttendingUsers = useCallback(async () => {
    const { attendingUsers: attendingUserIds } = await getAttendingUsers(selectedEvent.event_id);
    const attendingUserDetailsPromises = attendingUserIds.map(fetchUserDetails);
    const attendingUserDetails = await Promise.all(attendingUserDetailsPromises); // Promise.all() can concurrently fetch user details
    setAttendingUsers(attendingUserDetails.filter(user => user !== undefined));
  }, [selectedEvent.event_id]);

  // handler for the user response to an invitation
  const handleCheckInvitation = useCallback(async () => {
    const { isInvited } = await checkInvitation(userContext, selectedEvent.event_id);
    console.log('Check Invitation Response:', { isInvited });

    // handle the invitation status as needed
    if (isInvited) {
      console.log(`User ${currentUserId} is invited to event ${selectedEvent.event_id}`);
      
      // mark attendance and log the response
      console.log('Mark attendance response:', await markAttendance(userContext, selectedEvent.event_id));

      // fetch attending users after marking attendance
      const { attendingUsers: updatedAttendingUserIds } = await getAttendingUsers(selectedEvent.event_id);
      console.log('Get response about users attending:', updatedAttendingUserIds);

      const attendingUserDetailsPromises = updatedAttendingUserIds.map(fetchUserDetails);
      const attendingUserDetails = await Promise.all(attendingUserDetailsPromises);

      // update state with user details
      setAttendingUsers(attendingUserDetails.filter(Boolean)); // filter out null values
    } else {
      console.log(`User ${currentUserId} is not invited to event ${selectedEvent.event_id}`);
      // prompt for those not attending
    }
    // After marking attendance, fetch the updated list of attending users
    await fetchAttendingUsers();
  }, [currentUserId, selectedEvent.event_id, userContext, fetchAttendingUsers]);

  // useEffect hook to fetch the list of those attending when the selected event changes
  useEffect(() => {
    fetchAttendingUsers();
  }, [selectedEvent, fetchAttendingUsers]);
  

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h3>Event Details</h3>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {selectedEvent.date}</p>
      <p>Begins at: {selectedEvent.start_time}</p>
      <p>Location: {selectedEvent.location}</p>
      <p>Attending Users: {attendingUsers.map(user => `${user.details.first_name} ${user.details.last_name}`).join(', ')}</p>
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
    location: PropTypes.string,
    event_id: PropTypes.number.isRequired,
  }).isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};

EventList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export default EventList;