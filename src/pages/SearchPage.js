import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import { useSelector } from 'react-redux';
import { selectSearchInputValue } from '../redux/search/search.selector';

const SearchPage = (searchResults) => {
  const { results } = searchResults;
  // console.log(searchResults);
  const selectInputValue = useSelector(selectSearchInputValue);
  // console.log(results);
  // console.log(selectInputValue);

  return (
    <>
      <Navbar />
      <div>Search Page</div>
      <FooterBrowserPage />
    </>
  );
};

export default SearchPage;
