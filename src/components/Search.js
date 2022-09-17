import React from 'react';

function Search({ onSearch, keyword }) {
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
        data-testid="search"
      />
    </section>
  );
}

export default Search;
