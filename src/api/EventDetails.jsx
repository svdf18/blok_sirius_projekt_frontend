import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../services/Auth/UserContext.jsx'
import { checkInvitation, markAttendance, getUserById, getAttendingUsers } from './UserApis.jsx';
import { formatDateFrontend } from '../utils/DateUtil/FormatDateComponent.jsx';
import { EventButtonContainer, EventCardAttending, EventCardTitle, EventDetailButtons } from '../utils/EventCardUtil/EventCardElements.jsx';
import { getEventDepartments } from './DepartmentApi.jsx';
import { unattendEvent } from './UserApis.jsx';

export const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  const [attendingUsers, setAttendingUsers] = useState([]);
  const [isAttending, setIsAttending] = useState(false);
  const userContext = useUser();
  const currentUserId = userContext.user?.user_id;
  const [error, setError] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [departments, setDepartments] = useState([]);


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
      setIsAttending(true);
    } else {
      setError("***You are not invited to the event***");
      console.log(`User ${currentUserId} is not invited to event ${selectedEvent.event_id}`);
      // prompt for those not attending
    }
    // after marking attendance, fetch the updated list of attending users
    await fetchAttendingUsers();
  }, [currentUserId, selectedEvent.event_id, userContext, fetchAttendingUsers, attendingUsers]);


  const handleUnattendEvent = useCallback(async () => {
    try {
      console.log('Unattend event response:', await unattendEvent(userContext, selectedEvent.event_id));
      await fetchAttendingUsers();
      setIsAttending(false);
    } catch (error) {
      console.error('Error unattending event:', error.message);
      setError('Error unattending event');
    }
  }, [userContext, selectedEvent.event_id, fetchAttendingUsers]);


  useEffect(() => {
    // Check if the current user is already attending when the attendingUsers list changes
    const isUserAttending = attendingUsers.some(user => user.id === currentUserId);
    setIsAttending(isUserAttending);
  }, [attendingUsers, currentUserId]);

  // useEffect hook to fetch the list of those attending when the selected event changes
  useEffect(() => {
    fetchAttendingUsers();
  }, [selectedEvent, fetchAttendingUsers]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAttendingUsers();
      try {
        const departments = await getEventDepartments(selectedEvent.event_id);
        setDepartments(departments);
      } catch (error) {
        console.error('Error fetching event departments:', error.message);
      }
    };
  
    fetchData();
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
      <p>Departments: {departments.join(', ')}</p>
      <EventCardAttending>Attending Users: {attendingUsers.map(user => `${user.details.first_name} ${user.details.last_name}`).join(', ')}</EventCardAttending>
      <EventButtonContainer>
      <EventDetailButtons onClick={handleCloseDetailView}>Close</EventDetailButtons>
      <EventDetailButtons onClick={isAttending ? handleUnattendEvent : handleCheckInvitation}>
      {isAttending ? "Unattend" : "Attend"}
      </EventDetailButtons>
      </EventButtonContainer>
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