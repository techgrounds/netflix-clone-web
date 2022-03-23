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
    <div className="searchbar" ref={searchbarRef}>
      <div className="searchbar-toggler" onClick={handleSearchInputToggle}>
        <span
          className={`icon-search-close ${
            searchInputToggle && 'icon-search-close-active'
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
          className={`searchbar-search ${
            searchInputToggle && 'searchbar-active'
          }`}
        />
        <span
          className={`icon-search ${searchInputToggle && 'icon-search-active'}`}
        >
          <IconSearch size="2em" />
        </span>
      </div>

      <div
        className={`searchbar-clear ${
          searchInputToggle && searchInput.length && 'typing'
        }`}
        onClick={clearSearchInputToggle}
      ></div>
    </div>
  );
}
