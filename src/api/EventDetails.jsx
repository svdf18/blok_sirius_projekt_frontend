import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../services/Auth/UserContext.jsx'
import { checkInvitation, markAttendance, getUserById, getAttendingUsers } from './UserApis.jsx';
import { formatDateFrontend } from '../utils/DateUtil/FormatDateComponent.jsx';
import { EventCardAttending, EventCardTitle } from '../utils/EventCardUtil/EventCardElements.jsx';

export const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  const [attendingUsers, setAttendingUsers] = useState([]);
  const userContext = useUser();
  const currentUserId = userContext.user?.user_id;
  const [error, setError] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");


  useEffect(() => {
    if (selectedEvent) {
      setFormattedDate(formatDateFrontend(selectedEvent.date));
    }
  }, [selectedEvent]);
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
      // check if the user is already attending the event
      const isAlreadyAttending = attendingUsers.some(user => user.id === currentUserId);
      if (isAlreadyAttending) {
        setError("***You are already attending the event***");
      }
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
      setError("***You are not invited to the event***");
      console.log(`User ${currentUserId} is not invited to event ${selectedEvent.event_id}`);
      // prompt for those not attending
    }
    // after marking attendance, fetch the updated list of attending users
    await fetchAttendingUsers();
  }, [currentUserId, selectedEvent.event_id, userContext, fetchAttendingUsers, attendingUsers]);

  // useEffect hook to fetch the list of those attending when the selected event changes
  useEffect(() => {
    fetchAttendingUsers();
  }, [selectedEvent, fetchAttendingUsers]);


  return (
    <div>
      {error && <p>{error}</p>}
      <EventCardTitle>Event Details</EventCardTitle>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {formattedDate}</p>
      <p>Begins at: {selectedEvent.start_time}</p>
      <p>Location: {selectedEvent.location}</p>
      <p>Departments: {selectedEvent.departments}</p>
      <EventCardAttending>Attending Users: {attendingUsers.map(user => `${user.details.first_name} ${user.details.last_name}`).join(', ')}</EventCardAttending>
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
    departments: PropTypes.string,
    event_id: PropTypes.number.isRequired,
  }).isRequired,
  handleCloseDetailView: PropTypes.func.isRequired,
};