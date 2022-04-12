import React, { useEffect, useState } from 'react';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import { useDispatch, useSelector } from 'react-redux';
import { searchMoviesResultsAsync } from '../redux/search/search.actions';
import Lane from '../components/Lane/Lane';

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
  }, []);

  console.log('filtered arr', filteredArray);

  return (
    <>
      <div style={{ paddingTop: '200px' }}>
        <Lane
          laneTitle={'Search Results'}
          movies={filteredArray}
          key={filteredArray.toString()}
        />
      </div>

      <FooterBrowserPage />
    </>
  );
};

export default SearchPage;
