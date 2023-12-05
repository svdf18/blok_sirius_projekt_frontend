import { useState, useEffect } from 'react';
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton } from './FormElements';
import PropTypes from 'prop-types';
import { postRecommendation } from '../../api/RecommendationApis';
import Select from 'react-select';
import { getUsers } from '../../api/UserApis';

const CreateRecommendationForm = ({ title, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    tagged_user: null,
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserChange = (selectedUser) => {
    setForm({
      ...form,
      tagged_user: selectedUser,
    });
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await getUsers();
        const formattedUsers = usersData.map((user) => ({
          value: user.user_id,
          label: `${user.first_name} ${user.last_name}`,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error loading users:', error.message);
      }
    };

    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const newRecommendation = await postRecommendation({
        ...form,
        category: title.toLowerCase(),
        tagged_user_id: form.tagged_user ? form.tagged_user.value : null,
      });
      onSubmit(newRecommendation);
  
      console.log('New Recommendation:', newRecommendation);
  
      setForm({
        title: '',
        content: '',
        tagged_user: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{`Create New ${title} Recommendation`}</FormTitle>

      <FormInputContainer>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Subject"
          value={form.title}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Content</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="content"
          placeholder="Write something nice"
          value={form.content}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Tagged User</FormLabel>
        <Select
          value={form.tagged_user}
          onChange={handleUserChange}
          options={users}
          isSearchable
          placeholder="Search for a user..."
        />
      </FormInputContainer>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

CreateRecommendationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default CreateRecommendationForm;
