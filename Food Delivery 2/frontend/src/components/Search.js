import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div>
      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-success text-white bg-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
