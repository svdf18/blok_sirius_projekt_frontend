import { useState } from "react";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { postEvent, postSelectedDepartments } from "../../api/EventApis";
import { formatDateBackend } from "../DateUtil/FormatDateComponent";

const CreateEventForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    created_by_id: "1", 
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    date: null,
    location: "",
  });

  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date" ) {
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

  const handleDepartmentChange = (e) => {
    const { value, checked } = e.target;
    const departmentId = parseInt(value, 10);  // Convert value to an integer
  
    if (checked) {
      setSelectedDepartments([...selectedDepartments, departmentId]);
    } else {
      setSelectedDepartments(selectedDepartments.filter(depId => depId !== departmentId));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formattedDate = form.date && form.date.toLocaleDateString('en-GB').split('/').reverse().join('-');
  
      console.log('Form Data:', {
        created_by_id: form.created_by_id,
        title: form.title,
        description: form.description,
        date: formattedDate,
        start_time: form.start_time,
        end_time: form.end_time,
        location: form.location,
      });
  
      console.log('Department Data:', selectedDepartments);
  
      // Submit event data and get the event ID
      const eventId = await postEvent({
        ...form,
        date: formattedDate,
      });
  
      // Submit selected departments using the obtained event ID
      await postSelectedDepartments(eventId, selectedDepartments);
  
      // Clear the form after successful submission
      setForm({
        created_by_id: "",
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        date: null,
        location: "",
      });
      setSelectedDepartments([]);
  
      // Pass the event ID to the parent component
      onSubmit(eventId);
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
        <FormLabel>Location</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="location"
          placeholder="Event location"
          value={form.location}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Departments</FormLabel>
        <div>
          {/* Management */}
          <label>
            <input
              type="checkbox"
              name="department"
              value={1}
              checked={selectedDepartments.includes(1)}
              onChange={handleDepartmentChange}
            />
            Management
          </label>

          {/* IT */}
          <label>
            <input
              type="checkbox"
              name="department"
              value={2}
              checked={selectedDepartments.includes(2)}
              onChange={handleDepartmentChange}
          />
          IT
          </label>

          {/* Human Resources */}
          <label>
            <input
              type="checkbox"
              name="department"
              value={3}
              checked={selectedDepartments.includes(3)}
              onChange={handleDepartmentChange}
          />
          Human Resources
          </label>

          {/* Legal */}
          <label>
            <input
              type="checkbox"
              name="department"
              value={4}
              checked={selectedDepartments.includes(4)}
              onChange={handleDepartmentChange}
          />
          Legal
          </label>

        </div>
      </FormInputContainer>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

CreateEventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateEventForm;