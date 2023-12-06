import { useState } from "react";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { postUser } from "../../api/UserApis";
import { formatDateBackend } from "../DateUtil/FormatDateComponent";

const CreateUserForm = ({ onSubmit }) => {
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

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "birthdate") {
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
    const formattedDate = form.birthdate && form.birthdate.toLocaleDateString('en-GB').split('/').reverse().join('-');
    const newUser = await postUser({ ...form, birthdate: formattedDate });
    onSubmit(newUser);

    setForm({
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
  } catch (error) {
    console.error("Error submitting form:", error.message);
  }
};

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{"Create User"}</FormTitle>

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
          onChange={(date) => handleChange({ target: { name: 'birthdate', value: date } })}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
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

CreateUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateUserForm;