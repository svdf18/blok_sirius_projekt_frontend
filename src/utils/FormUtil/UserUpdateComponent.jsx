import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton, StyledDatePicker } from "./FormElements";
import PropTypes from 'prop-types';
import { updateUser } from "../../api/UserApis";
import Select from 'react-select';
import { useUser } from "../../services/Auth/UserContext";
import { getDepartments } from "../../api/DepartmentApi";


  const UpdateUserForm = ({ userToUpdate, onSubmit }) => {
    const { user } = useUser();
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
      department: "",
      updated_by_id: user?.user_id || '',
    });

    const [departments, setDepartments] = useState([]);

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

  useEffect(() => {
    // Fetch departments when the component mounts
    const fetchDepartments = async () => {
      try {
        const response = await getDepartments();
        // Assuming the response is an array of objects with a 'department_name' property
        const departmentOptions = response.map((department) => ({ value: department.department_name, label: department.department_name }));
        setDepartments(departmentOptions);
      } catch (error) {
        console.error("Error fetching departments:", error.message);
      }
    };
  
    fetchDepartments();
  }, []);


  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

  
const handleDateChange = (date) => {
  console.log("New date:", date);
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
    const updatedUser = await updateUser({ ...form, birthdate: formattedDate, updated_by_id: user?.user_id || '', });
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
        onChange={handleDateChange}
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
      <Select
        options={[
          { value: 'user', label: 'User' },
          { value: 'admin', label: 'Admin' },
        ]}
        onChange={(selectedOption) => setForm({ ...form, user_type: selectedOption.value })}
        value={{ value: form.user_type, label: form.user_type.charAt(0).toUpperCase() + form.user_type.slice(1) }}
        placeholder="Select user type"
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

    <FormInputContainer>
        <FormLabel>Department</FormLabel>
        <Select
          options={departments}
          onChange={(selectedOption) => setForm({ ...form, department: selectedOption.value })}
          value={departments.find((option) => option.value === form.department)}
          placeholder="Select department"
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
    department: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default UpdateUserForm;