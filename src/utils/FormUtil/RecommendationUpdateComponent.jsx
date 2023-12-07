import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton } from "./FormElements";
import { updateRecommendation } from '../../api/RecommendationApis';
import { getUsers } from '../../api/UserApis';
import { useUser } from '../../services/Auth/UserContext';

const UpdateRecommendationForm = ({ recommendationToUpdate, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    tagged_user: null,
  });
  const [users, setUsers] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (recommendationToUpdate) {
      setForm(recommendationToUpdate);
    }
  }, [recommendationToUpdate]);

  

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
    setForm({
      ...form,
      tagged_user: selectedUser,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update created_by_id with user_id from useUser hook
      const updatedForm = {
        ...form,
        created_by_id: user?.user_id || '',
      };
      await updateRecommendation(updatedForm);
      const updatedRecommendation = { ...updatedForm };
      onSubmit(updatedRecommendation);
      console.log('Updated Recommendation:', updatedRecommendation);

      setForm({
        title: '',
        content: '',
        category: '',
        tagged_user: null,
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
        <FormLabel>Category</FormLabel>
        <Select
          options={[
            { value: 'food', label: 'Food' },
            { value: 'culture', label: 'Culture' },
            { value: 'travel', label: 'Travel' },
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
    category: PropTypes.string.isRequired,
    tagged_user: PropTypes.object,
  }),
  onSubmit: PropTypes.func.isRequired,
  users: PropTypes.array,
};

export default UpdateRecommendationForm;
