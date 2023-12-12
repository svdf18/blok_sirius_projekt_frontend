import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton } from "./FormElements";
import { updateRecommendation } from '../../api/RecommendationApis';
import { getUsers } from '../../api/UserApis';
import { useUser } from '../../services/Auth/UserContext';

const UpdateRecommendationForm = ({ recommendationToUpdate, onSubmit }) => {
  const { user } = useUser();
  const [form, setForm] = useState({
    title: '',
    content: '',
    recommendation_url: '', // Added recommendation_url field
    category: '',
    tagged_user: '',
    updated_by_id: user?.user_id || '',
  });

  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    if (recommendationToUpdate) {
      console.log('Recommendation to Update:', recommendationToUpdate);
      setForm(recommendationToUpdate);
    }
  }, [recommendationToUpdate]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        console.log('Users Data:', usersData);
        const formattedUsers = usersData.map((user) => ({
          value: user.user_id,
          label: `${user.first_name} ${user.last_name}`,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error loading users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleTextChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (selectedOption) => {
    setForm({
      ...form,
      category: selectedOption.value,
    });
  };

  const handleUserChange = (selectedUser) => {
    console.log('Selected User:', selectedUser);
    console.log('Current Form State:', form);
    setForm({
      ...form,
      tagged_user: selectedUser,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedForm = {
        ...form,
        updated_by_id: user?.user_id || '', // Update updated_by_id based on useUser
      };

      await updateRecommendation(updatedForm);
      const updatedRecommendation = { ...updatedForm };
      onSubmit(updatedRecommendation);
      console.log('Updated Recommendation:', updatedRecommendation);

      setForm({
        ...form,
        updated_by_id: null, // Reset updated_by_id if needed
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Update Recommendation</FormTitle>

      <FormInputContainer>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          onChange={handleTextChange}
          name="title"
          placeholder="Subject"
          value={form.title}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Content</FormLabel>
        <FormInput
          type="text"
          onChange={handleTextChange}
          name="content"
          placeholder="Write something nice"
          value={form.content}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Recommendation URL</FormLabel>
        <FormInput
          type="text"
          onChange={handleTextChange}
          name="recommendation_url"
          placeholder="https:// ..."
          value={form.recommendation_url}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Category</FormLabel>
        <Select
          options={[
            { value: 'Food', label: 'Food' },
            { value: 'Culture', label: 'Culture' },
            { value: 'Travel', label: 'Travel' },
          ]}
          onChange={handleCategoryChange}
          name="category"
          placeholder="Select a category"
          value={form.category ? { value: form.category, label: form.category } : null}
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
      <SubmitButton type="submit">Update</SubmitButton>
    </FormContainer>
  );
};

UpdateRecommendationForm.propTypes = {
  recommendationToUpdate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    recommendation_url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tagged_user: PropTypes.object,
  }),
  onSubmit: PropTypes.func.isRequired,
  users: PropTypes.array,
};

export default UpdateRecommendationForm;
