import PropTypes from 'prop-types';
import { useEventList } from '../../api/EventList';
import { formatDateFrontend, formatTime } from '../../utils/DateUtil/FormatDateComponent';
import { UpdateButtonComponent } from '../../utils/ButtonUtil/UpdateButtonComponent';
import { DeleteButtonComponent } from '../../utils/ButtonUtil/DeleteButtonComponent';
import { ButtonCardContainer } from '../../utils/UserCardUtil/UserCardElements';
import ModalComponent from '../../utils/ModalUtil/FormModalComponent';
import { deleteEvent } from '../../api/EventApis';
import { useState, useEffect } from 'react';
import UpdateEventForm from '../../utils/FormUtil/EventUpdateComponent';

const UpcomingSection = ({ selectedEvent, handleCloseDetailView, handleEventClick, onUpdate}) => {
  const { upcomingEvents } = useEventList();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEventModal, setSelectedEventModal] = useState(null);

const openUpdateModal = () => {
  console.log('Opening modal');
  setSelectedEventModal(event);
  setIsUpdateModalOpen(true);
};

  const closeUpdateModal = () => {
    setSelectedEventModal(null);
  };

  useEffect(() => {
    if (selectedEventModal === null) {
      setIsUpdateModalOpen(false);
    }
  }, [selectedEventModal]);


  return (
    <div>
      {selectedEvent ? (
        <EventDetails selectedEvent={selectedEvent} handleCloseDetailView={handleCloseDetailView} />
      ) : (
        <>
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event) => (
              <li key={event.event_id}>
                <span onClick={() => handleEventClick(event)}>
                  {formatDateFrontend(event.date)} at {formatTime(event.start_time)} - {event.title} ({event.location})
                </span>
                      <ButtonCardContainer>
        <DeleteButtonComponent
          deleteFunction={(itemId) => {
            console.log(`Deleting user with ID ${itemId}`);
            deleteEvent(itemId);
          }}
          itemId={event.event_id}
          itemType="event"
        />
        <UpdateButtonComponent onUpdate={() => openUpdateModal()} itemId={event.event_id} itemProps={event} />
        <ModalComponent
          isOpen={isUpdateModalOpen}
          onRequestClose={closeUpdateModal}
          formComponent={(props) => <UpdateEventForm userToUpdate={selectedEvent} {...props} />}
          onSubmit={(updatedEvent) => {
            console.log('Form submitted:', updatedEvent);
            onUpdate(updatedEvent);
            closeUpdateModal();
          }}
        />
      </ButtonCardContainer>
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
  onUpdate: PropTypes.func.isRequired,
};

const EventDetails = ({ selectedEvent, handleCloseDetailView }) => {
  return (
    <div>
      <h3>Event Details</h3>
      <p>Title: {selectedEvent.title}</p>
      <p>Description: {selectedEvent.description}</p>
      <p>Date: {formatDateFrontend(selectedEvent.date)}</p>
      <p>Begins at: {formatTime(selectedEvent.start_time)}</p>
      <p>Ends at: {formatTime(selectedEvent.end_time)}</p>
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