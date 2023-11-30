import { useState } from "react";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel } from "./FormElements";
import PropTypes from 'prop-types';
import { postUser } from "../../api/UserApis";

const CreateUserForm = ({ onSubmit }) => {
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await postUser(form);
      onSubmit(newUser);

      setForm({
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

    <button type="submit">Submit</button>
    </FormContainer>
  );
};

CreateUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateUserForm;
