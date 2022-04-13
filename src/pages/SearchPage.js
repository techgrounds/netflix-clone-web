import React from "react";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import { useSelector } from "react-redux";

import Lane from "../components/Lane/Lane";

const SearchPage = () => {
  const allSearchResults = useSelector((state) => state.search.searchMovies);
  const searchInput = useSelector((state) => state.search.inputValue);

  const filteredArray = allSearchResults
    ?.map((result) => {
      return { ...result, title: result.title.toLowerCase() };
    })
    .filter((result) => result.title.includes(searchInput.toLowerCase()));

  return (
    <>
      {filteredArray && filteredArray.length > 0 ? (
        <div style={{ paddingTop: "200px" }}>
          <Lane
            laneTitle={"Search Results"}
            movies={filteredArray}
            key={filteredArray.toString()}
          />
        </div>
      ) : (
        <h2
          style={{
            paddingTop: "200px",
            textAlign: "center",
            marginBottom: "100px",
          }}
        >
          Sorry, we searched everywhere but we did not found any movie with that
          title.
        </h2>
      )}

      <FooterBrowserPage />
    </>
  );
};

export default SearchPage;
