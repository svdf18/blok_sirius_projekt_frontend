import { useState } from 'react';

const useSearch = (initialData) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (data) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return { query, setQuery, filteredData, handleSearch };
};

export default useSearch;
