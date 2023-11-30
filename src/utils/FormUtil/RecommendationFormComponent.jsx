import { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel } from "./FormElements";
import PropTypes from 'prop-types';

const CreateRecommendationForm = ({ recommendationToUpdate, onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    searchTerm: "",
    comment: "",
    taggedUser: "",
  });

  useEffect(() => {
    if (recommendationToUpdate) {
      setForm(recommendationToUpdate);
    }
  }, [recommendationToUpdate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    // Implement Google search logic using an API or custom function
    // Set the result (e.g., image URL) in the state
    try {
      const response = await axios.get(`https://your-google-search-api?q=${form.searchTerm}`);
      const imageUrl = response.data.imageUrl; // Adjust based on your API response
      setForm({
        ...form,
        imageUrl,
      });
    } catch (error) {
      console.error("Error searching:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);
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
      <FormTitle>{recommendationToUpdate ? "Update Recommendation" : "Create Recommendation"}</FormTitle>

      <FormInputContainer>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Recommendation title"
          value={form.title}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Search or Paste URL</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="searchTerm"
          placeholder="Search term or URL"
          value={form.searchTerm}
        />
        <button type="button" onClick={handleSearch}>Search</button>
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Comment</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="comment"
          placeholder="Your comment"
          value={form.comment}
        />
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel>Tag a User</FormLabel>
        <FormInput
          type="text"
          onChange={handleChange}
          name="taggedUser"
          placeholder="Username to tag"
          value={form.taggedUser}
        />
      </FormInputContainer>

      <button type="submit">{recommendationToUpdate ? "Update" : "Submit"}</button>
    </FormContainer>
  );
};

CreateRecommendationForm.propTypes = {
  recommendationToUpdate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    taggedUser: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default CreateRecommendationForm;