import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { updateEvent } from "../../api/EventApis";

const UpdateEventForm = ({ eventToUpdate, onSubmit }) => {
  const [form, setForm] = useState({
    created_by_id: "",
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    date: null,
    location: "",
  });

  // console.log(eventToUpdate);

  useEffect(() => {
    if (eventToUpdate) {
      const formattedDate = new Date(eventToUpdate.date);

      setForm({
        ...eventToUpdate,
        date: formattedDate,
      });
    }
  }, [eventToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
      setForm({
        ...form,
        [name]: date,
      });
    } else if (typeof date === 'string') {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        setForm({
          ...form,
          [name]: parsedDate,
        });
      } else {
        console.error("Invalid date selected");
      }
    } else {
      console.error("Invalid date selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Add a validation check to ensure end time is after start time, would actually need end date to make this proper
    if (form.start_time && form.end_time && form.start_time >= form.end_time) {
      console.error("End time must be after start time");
      return;
    }

    try {
      const formattedDate =
        form.date &&
        form.date.toLocaleDateString("en-GB").split("/").reverse().join("-");

      const updatedEvent = await updateEvent({
        ...form,
        event_id: eventToUpdate.event_id,
        date: formattedDate,
      });
      console.log("UpdateEventForm handleSubmit called:", updatedEvent);
      onSubmit(updatedEvent);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  return (
    <FormContainer onSubmit={handleSubmit} onClick={handleFormClick}>
      <FormTitle>{"Update Event"}</FormTitle>

      <FormInputContainer>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Event title"
          value={form.title}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Description</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="description"
          placeholder="Event description"
          value={form.description}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Date</FormLabel>
        <StyledDatePicker
          selected={form.date}
          onChange={(date) => handleDateChange(date, 'date')}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Start Time</FormLabel>
        <FormInput
          type="time"
          onChange={handleChange}
          name="start_time"
          value={form.start_time}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>End Time</FormLabel>
        <FormInput
          type="time"
          onChange={handleChange}
          name="end_time"
          value={form.end_time}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Location</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="location"
          placeholder="Event location"
          value={form.location}
        />
      </FormInputContainer>

      <SubmitButton onClick={(e) => e.stopPropagation()}>Submit</SubmitButton>
    </FormContainer>
  );
};

UpdateEventForm.propTypes = {
  eventToUpdate: PropTypes.shape({
    event_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default UpdateEventForm;