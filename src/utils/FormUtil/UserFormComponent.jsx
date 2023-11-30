import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, FormIcon, CheckIcon } from "./FormElements";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Simple Form</FormTitle>

      <FormInputContainer>
        <FormLabel>First Name</FormLabel>
        <FormInput type="text" />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Last Name</FormLabel>
        <FormInput type="text" />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Email</FormLabel>
        <FormInput type="email"/>
      </FormInputContainer>
      
      <FormIcon>
        <CheckIcon />
      </FormIcon>

    </FormContainer>
  );
};

export default SimpleForm;