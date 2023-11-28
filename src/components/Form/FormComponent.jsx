import { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel } from "./FormElements";
import PropTypes from 'prop-types';

const Form = ({ userToUpdate, onSubmit }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    birthdate: "",
    email: "",
    phone: "",
    street: "",
    postal_code: "",
    user_type: "",
    user_image: "",
  });


Form.propTypes = {
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
  
  useEffect(() => {if (userToUpdate) { setForm(userToUpdate)}}, [userToUpdate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    console.log(form);
    console.log("onSubmit type:", typeof onSubmit);
    onSubmit(form);
    } catch (error) {
      console.error("Error:", error.message);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error:",
          error.response.status,
          error.response.data
        );
      } else {
        console.error("Non-Axios Error:", error.message);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{userToUpdate ? "Update User" : "Create User"}</FormTitle>

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
      <FormInput
        type="date"
        onChange={handleChange}
        name="birthdate"
        placeholder="Birth date"
        value={form.birthdate}
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


      <button type="submit">{userToUpdate ? "Update" : "Submit"}</button>
    </FormContainer>
  );
};

export default Form;