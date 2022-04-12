import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesResultsAsync } from "../redux/search/search.actions";
import { v4 as uuidv4 } from "uuid";

const SearchPage = () => {
  const dispatch = useDispatch();
  const allSearchResults = useSelector((state) => state.search.searchMovies);

  useEffect(() => {
    dispatch(searchMoviesResultsAsync);
    console.log("check", allSearchResults);
  }, []);

  return (
    <>
      <Navbar />
      <div>Search Page</div>
      <FooterBrowserPage />
    </>
  );
};

export default SearchPage;
