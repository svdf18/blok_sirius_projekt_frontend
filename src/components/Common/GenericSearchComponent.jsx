import { useState } from 'react';
import PropTypes from 'prop-types';

const GenericSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the query to the parent component
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

GenericSearch.propTypes = {
  onSearch: PropTypes.func,
};

export default GenericSearch;