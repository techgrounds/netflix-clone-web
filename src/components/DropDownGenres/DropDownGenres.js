import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropDownGenres.scss";
import { IconCaretDown } from "../Icons/IconCaretDown";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGenre,
  genreGridActive,
} from "../../redux/genres/genres.actions";

function DropDownGenres() {
  const [showDropdown, setShowDropdown] = useState(false);
  const moviesByGenreData = useSelector((state) => state.genres.allGenres);

  const dispatch = useDispatch();
  const currentGenre = useSelector((state) => state.genres.selectGenre);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (showDropdown && ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <div className="container-dropdown-genres ">
        {/* <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="dropdown-toggle-btn"
                    ref={ref}
                >
                    Genres
                    <IconCaretDown />
                </button> */}

        <select
          className="dropdown-toggle-btn"
          value={currentGenre}
          onChange={(e) => {
            dispatch(selectGenre(e.target.value));
            dispatch(genreGridActive(true));
          }}
        >
          {moviesByGenreData.map((genre) => (
            <option value={genre.genre} key={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default DropDownGenres;
