import React, { useState, useRef } from 'react';
import { IconSearch } from '../Icons/IconSearch';

import './styles.scss';

export default function SearchBar() {
  const [searchInputToggle, setSearchInputToggle] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const searchbarRef = useRef();
  const searchInputRef = useRef();

  const handleSearchInputToggle = () => {
    searchInputRef.current.focus();
    setSearchInputToggle(!searchInputToggle);
  };

  const clearSearchInputToggle = () => {
    setSearchInput('');
  };

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  return (
    <div className="Searchbar" ref={searchbarRef}>
      <div className="Searchbar--toggler" onClick={handleSearchInputToggle}>
        <span
          className={`Icon--search--close ${
            searchInputToggle && 'Icon--search--close--active'
          }`}
        >
          <IconSearch size="2em" />
        </span>
        <input
          type="text"
          placeholder="Titles, persons, genres"
          value={searchInput}
          onChange={handleSearchInput}
          ref={searchInputRef}
          className={`Searchbar--search ${
            searchInputToggle && 'Searchbar--active'
          }`}
        />
        <span
          className={`Icon--search ${
            searchInputToggle && 'Icon--search--active'
          }`}
        >
          <IconSearch size="2em" />
        </span>
      </div>

      <div
        className={`Searchbar--clear ${
          searchInputToggle && searchInput.length && 'typing'
        }`}
        onClick={clearSearchInputToggle}
      >
        {/* <RiCloseFill /> */}
      </div>
    </div>
  );
}
