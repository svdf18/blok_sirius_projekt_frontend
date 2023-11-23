import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 28px;
  padding: 20px;
  margin: 20px;
  background-color: #C2DFD3;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: inherit;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

// const BrowseButton = styled.label`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   display: inline-block;
// `;

// const FileInputContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   display: inline-block;
// `;

// const HiddenFileInput = styled.input`
//   font-size: 100px;
//   position: absolute;
//   left: 0;
//   top: 0;
//   opacity: 0;
// `;

const Form = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    birthdate: "",
    email: "",
    phone: "",
    street: "",
    postal_code: "",
    user_type: "",
    user_image: ""
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
      console.log(form);
      const response = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
      } else {
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Create User</FormTitle>
      <FormInput
        type="text"
        onChange={handleChange}
        name="first_name"
        placeholder="First name"
      />
      <FormInput
        type="text"
        onChange={handleChange}
        name="last_name"
        placeholder="Last name"
      />
      <FormInput
        type="date"
        onChange={handleChange}
        name="birthdate"
        placeholder="Birth date"
      />
      <FormInput
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <FormInput
        type="tel"
        onChange={handleChange}
        name="phone"
        placeholder="Phone number"
      />
      <FormInput
        type="text"
        onChange={handleChange}
        name="street"
        placeholder="Address"
      />
      <FormInput
        type="number"
        onChange={handleChange}
        name="postal_code"
        placeholder="Postal code"
      />
      <FormInput
        type="text"
        onChange={handleChange}
        name="user_type"
        placeholder="User type"
      />
      <FormInput
        type="text"
        onChange={handleChange}
        name="user_image"
        placeholder="User image"
      />
      {/* <FileInputContainer>
        <BrowseButton>Browse</BrowseButton>
        <HiddenFileInput
          type="file"
          onChange={handleChange}
          name="userImage"
        />
      </FileInputContainer> */}
      <button type="submit">Submit</button> 
    </FormContainer>
  );
};

export default Form;
