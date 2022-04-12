import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesResultsAsync } from "../redux/search/search.actions";
import { useNavigate, useLocation, useHistory } from "react-router-dom";
import Lane from "../components/Lane/Lane";
import { v4 as uuidv4 } from "uuid";

const SearchPage = () => {
  const dispatch = useDispatch();

  const allSearchResults = useSelector((state) => state.search.searchMovies);
  const searchInput = useSelector((state) => state.search.inputValue);

  const filteredArray = allSearchResults
    ?.map((result) => {
      return { ...result, title: result.title.toLowerCase() };
    })
    .filter((result) => result.title.includes(searchInput.toLowerCase()));
  useEffect(() => {
    dispatch(searchMoviesResultsAsync());
    console.log("check", allSearchResults);
  }, []);

  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <Lane
          laneTitle={"Search Results"}
          movies={filteredArray}
          key={uuidv4()}
        />
      </div>

      <FooterBrowserPage />
    </>
  );
};

export default SearchPage;
