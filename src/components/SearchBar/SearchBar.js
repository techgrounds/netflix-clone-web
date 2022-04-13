import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchInputValue,
  clearSearchInputValue,
  searchMoviesResultsAsync,
} from "../../redux/search/search.actions";

import { IconSearch } from "../Icons/IconSearch";

import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

import "./styles.scss";

export default function SearchBar() {
  const { language } = useContext(LangContext);
  const [searchInputToggle, setSearchInputToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchbarRef = useRef();
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchMovies = useSelector((state) => state.search.searchMovies);

  useOutsideClick(searchbarRef, () => {
    if (searchInputToggle) {
      setSearchInput("");
      setSearchInputToggle(false);
    }
  });

  const handleSearchInputToggle = () => {
    searchInputRef.current.focus();
    setSearchInputToggle(!searchInputToggle);
  };

  const clearSearchInputToggle = () => {
    setSearchInput("");
    dispatch(clearSearchInputValue());
    navigate("/home");
  };

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    dispatch(changeSearchInputValue(value));

    if (value.length > 0) {
      navigate(`/search?q=${value}`);
      if (!searchMovies.length) {
        dispatch(searchMoviesResultsAsync(value));
      }
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="searchbar" ref={searchbarRef}>
      <div className="searchbar-toggler" onClick={handleSearchInputToggle}>
        <span
          className={`icon-search-close ${
            searchInputToggle && "icon-search-close-active"
          }`}
        >
          <IconSearch size="2em" />
        </span>
        <input
          type="text"
          placeholder={language === "EN" ? "Titles, persons, genres" : "Titels, personen, genres"}
          value={searchInput}
          onChange={handleSearchInput}
          ref={searchInputRef}
          className={`searchbar-search ${
            searchInputToggle && "searchbar-active"
          }`}
        />
        <span
          className={`icon-search ${searchInputToggle && "icon-search-active"}`}
        >
          <IconSearch size="2em" />
        </span>
      </div>

      <div
        className={`searchbar-clear ${
          searchInputToggle && searchInput.length && "typing"
        }`}
        onClick={clearSearchInputToggle}
      ></div>
    </div>
  );
}
