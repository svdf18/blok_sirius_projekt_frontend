import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, FormIcon, CheckIcon } from "./FormElements";

const RecForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Rec Form</FormTitle>

      <FormInputContainer>
        <FormLabel>First Name:</FormLabel>
        <FormInput type="text" />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Last Name:</FormLabel>
        <FormInput type="text" />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Email:</FormLabel>
        <FormInput type="email"/>
      </FormInputContainer>

      <select>
        <FormLabel>Email:</FormLabel>
        <option value="volvo">Volvo</option>
      </select>

      <FormIcon>
        <CheckIcon />
      </FormIcon>

    </FormContainer>
  );
};

export default RecForm;