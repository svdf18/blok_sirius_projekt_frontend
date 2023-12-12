import PropTypes from 'prop-types';
import { EventCardContainer, EventCardText, ButtonCardContainer, CardContentContainer } from './EventCardElements';
import { UpdateButtonComponent } from '../../utils/ButtonUtil/UpdateButtonComponent';
import { DeleteButtonComponent } from '../../utils/ButtonUtil/DeleteButtonComponent';
import { deleteEvent } from '../../api/EventApis';
import ModalComponent from '../../utils/ModalUtil/FormModalComponent';
import UpdateEventForm from '../../utils/FormUtil/EventUpdateComponent';
import { useState, useEffect } from 'react';
import { formatDateFrontend, formatTimeFrontend } from '../../utils/DateUtil/FormatDateComponent';

const EventCard = ({ event, onUpdate, setSelectedEventProp }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openUpdateModal = () => {
    console.log('Update button clicked:', event.event_id, event);
    console.log('onUpdate:', onUpdate);

    setSelectedEvent(event);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    // console.log('Closing modal');
    // console.log('onUpdate:', onUpdate);

    setSelectedEvent(null);
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (selectedEvent === null) {
      setIsUpdateModalOpen(false);
    }
  }, [selectedEvent]);


  const handleEventClick = (event) => {
    console.log('Event clicked:', event);
    setSelectedEvent(event);
    setSelectedEventProp(event);
  };

  return (
    <EventCardContainer onClick={() => handleEventClick(event)}>
      <CardContentContainer>
        <EventCardText>{formatDateFrontend(event.date)} at {formatTimeFrontend(event.start_time)} - {event.title} ({event.location})</EventCardText>

        <ButtonCardContainer>

          <DeleteButtonComponent
            deleteFunction={(itemId, event) => {
              event.stopPropagation();
              console.log(`Delete button clicked for event with ID ${itemId}`);
              console.log(`Deleting event with ID ${itemId}`);
              deleteEvent(itemId);
            }}
            itemId={event.event_id}
            itemType="event"
          />
          <UpdateButtonComponent onUpdate={() => {
            openUpdateModal();
          }} itemId={event.event_id}
            itemProps={event} />

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
        </ButtonCardContainer>
      </CardContentContainer>
    </EventCardContainer>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    stopPropagation: PropTypes.func,
    event_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  setSelectedEventProp: PropTypes.func,
};

export default EventCard;