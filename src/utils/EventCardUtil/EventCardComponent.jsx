import PropTypes from 'prop-types';
import { formatDateFrontend, formatTimeFrontend } from '../../utils/DateUtil/FormatDateComponent';
import { UpdateButtonComponent } from '../../utils/ButtonUtil/UpdateButtonComponent';
import { DeleteButtonComponent } from '../../utils/ButtonUtil/DeleteButtonComponent';
import { deleteEvent } from '../../api/EventApis';
import { useState, useEffect } from 'react';
import ModalComponent from '../../utils/ModalUtil/FormModalComponent';
import UpdateEventForm from '../../utils/FormUtil/EventUpdateComponent';

const EventCard = ({ event, onUpdate }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const openUpdateModal = () => {
    console.log('Opening modal');
    console.log('onUpdate:', onUpdate); // Log onUpdate here
    setSelectedEvent(event);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    console.log('Closing modal');
    console.log('onUpdate:', onUpdate); // Log onUpdate here
    setSelectedEvent(null);
  };

  useEffect(() => {
    if (selectedEvent === null) {
      setIsUpdateModalOpen(false);
      console.log('Modal closed');
      console.log('onUpdate:', onUpdate); // Log onUpdate here
    }
  }, [selectedEvent]);

  return (
    <>
      <span onClick={() => handleEventClick(event)}>
        {formatDateFrontend(event.date)} at {formatTimeFrontend(event.start_time)} - {event.title} ({event.location})
      </span>
        <DeleteButtonComponent
          deleteFunction={() => {
            console.log(`Deleting event with ID ${event.event_id}`);
            deleteEvent(event.event_id);
          }}
          itemId={event.event_id}
          itemType="event"
        />
        <UpdateButtonComponent onUpdate={openUpdateModal} itemId={event.event_id} itemProps={event} />
        <ModalComponent
          isOpen={isUpdateModalOpen}
          onRequestClose={closeUpdateModal}
          formComponent={(props) => <UpdateEventForm eventToUpdate={selectedEvent} {...props} />}
          onSubmit={(updatedEvent) => {
            console.log('Form submitted:', updatedEvent);
            onUpdate(updatedEvent);
            closeUpdateModal();
          }}
        />
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    event_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    deadline_attend: PropTypes.string.isRequired,
    deadline_unattend: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  handleEventClick: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;