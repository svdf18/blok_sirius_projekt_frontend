import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { updateUser } from "../../api/UserApis";

  const UpdateUserForm = ({ userToUpdate, onSubmit }) => {
    const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      birthdate: null,
      email: "",
      phone: "",
      street: "",
      postal_code: "",
      user_type: "",
      user_image: "",
    });

  useEffect(() => {
    if (userToUpdate) {
      console.log(userToUpdate.birthdate);
      const formattedBirthdate = new Date(userToUpdate.birthdate);
      console.log(formattedBirthdate);
      setForm({
        ...userToUpdate,
        birthdate: formattedBirthdate,
      });
    }
  }, [userToUpdate]);
  
const handleChange = (date) => {
  if (date instanceof Date && !isNaN(date.getTime())) {
    setForm({
      ...form,
      birthdate: date,
    });
  } 
  else if (typeof date === 'string') {
    console.log(date);
    const parsedDate = new Date(date);
    console.log(parsedDate);
    if (!isNaN(parsedDate.getTime())) {
      setForm({
        ...form,
        birthdate: parsedDate,
      });
    } 
    else {
      console.error("Invalid date selected");
    }
  } else {
    console.error("Invalid date selected");
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log(form.birthdate);
    const formattedDate = form.birthdate && form.birthdate.toLocaleDateString('en-GB').split('/').reverse().join('-');
    console.log(formattedDate);
    const updatedUser = await updateUser({ ...form, birthdate: formattedDate });
    onSubmit(updatedUser);
  } catch (error) {
    console.error("Error submitting form:", error.message);
  }
};

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{"Update User"}</FormTitle>

      <FormInputContainer>
        <FormLabel>First Name</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="first_name"
          placeholder="First name"
          value={form.first_name}
        />
      </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Last Name</FormLabel>
      <FormInput
        type="text"
        onChange={handleChange}
        name="last_name"
        placeholder="Last name"
        value={form.last_name}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Birth Date</FormLabel>
      <StyledDatePicker
        selected={form.birthdate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Email</FormLabel>
      <FormInput
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Email"
        value={form.email}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Phone Number</FormLabel>
      <FormInput
        type="tel"
        onChange={handleChange}
        name="phone"
        placeholder="Phone number"
        value={form.phone}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Address</FormLabel>
      <FormInput
        type="text"
        onChange={handleChange}
        name="street"
        placeholder="Address"
        value={form.street}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>Postal Code</FormLabel>
      <FormInput
        type="number"
        onChange={handleChange}
        name="postal_code"
        placeholder="Postal code"
        value={form.postal_code}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>User Type</FormLabel>
      <FormInput
        type="text"
        onChange={handleChange}
        name="user_type"
        placeholder="User type"
        value={form.user_type}
      />
    </FormInputContainer>

    <FormInputContainer>
      <FormLabel>User Image</FormLabel>
      <FormInput
        type="text"
        onChange={handleChange}
        name="user_image"
        placeholder="User image"
        value={form.user_image}
      />
    </FormInputContainer>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

UpdateUserForm.propTypes = {
  userToUpdate: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    postal_code: PropTypes.number.isRequired,
    user_type: PropTypes.string.isRequired,
    user_image: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default UpdateUserForm;