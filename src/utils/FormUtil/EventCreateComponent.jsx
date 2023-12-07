import { useState } from "react";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { postEvent } from "../../api/EventApis";
import { formatDateBackend } from "../DateUtil/FormatDateComponent";

const CreateEventForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    user_id_creator: "1", 
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    date: null,
    deadline_attend: null,
    deadline_unattend: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date" || name === "deadline_attend" || name === "deadline_unattend") {
      const dateValue = typeof value === 'string' ? formatDateBackend(value) : value;

      setForm({
        ...form,
        [name]: dateValue,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const formattedDate = form.date && form.date.toLocaleDateString('en-GB').split('/').reverse().join('-');
    const formattedDeadlineAttend = form.deadline_attend && form.deadline_attend.toLocaleDateString('en-GB').split('/').reverse().join('-');
    const formattedDeadlineUnattend = form.deadline_unattend && form.deadline_unattend.toLocaleDateString('en-GB').split('/').reverse().join('-');
      const newEvent = await postEvent({ ...form, date: formattedDate, deadline_attend: formattedDeadlineAttend, deadline_unattend: formattedDeadlineUnattend});
      onSubmit(newEvent);

      setForm({
        user_id_creator: "",
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        date: null,
        deadline_attend: null,
        deadline_unattend: null,
        location: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{"Create Event"}</FormTitle>

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
          onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
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
        <FormLabel>Deadline to Attend</FormLabel>
        <StyledDatePicker
          selected={form.deadline_attend}
          onChange={(date) => handleChange({ target: { name: 'deadline_attend', value: date } })}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Deadline to Unattend</FormLabel>
        <StyledDatePicker
          selected={form.deadline_unattend}
          onChange={(date) => handleChange({ target: { name: 'deadline_unattend', value: date } })}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
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

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

CreateEventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateEventForm;