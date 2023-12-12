import { useState } from 'react';

const SearchGoogleComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "AIzaSyDbOMGqIycMMIzsYIG4igLlrzMl3_-KqF4";

  const performGoogleSearch = async () => {
    try {
      const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;
      console.log('Request URL:', url);
      
      const response = await fetch(url);
      console.log('Response:', response);
      
      const data = await response.json();
      console.log('Data:', data);

      if (data.items) {
        setSearchResults(data.items);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error performing Google search:', error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performGoogleSearch();
  };

  const handleLinkClick = (link) => {
    // You can send the selected link to your backend here
    console.log('Selected link:', link);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter your search query"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResults.map((result) => (
          <li key={result.link}>
            <a href={result.link} target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick(result.link)}>
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchGoogleComponent;
