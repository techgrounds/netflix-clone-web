import useWindowSize from "../Lane/WindowSize";
import { useState, useEffect } from "react";
import MiniModal from "../MiniModal/MiniModal";
import "./GenreGrid.scss";
import "../Lane/Lane.scss"

export const GridItem = ({ movie, leftIndex, rightIndex, index }) => {
  const size = useWindowSize();
  const [loadMovie, setLoadMovie] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sleep = (milliseconds) => {

    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  // console.log('index', index)
  const movieLogoCheck = () => {
    if (movie.logo === "") {
      return movie.title;
    }
    if (movie.logo != "") {
      return (
        <div className="movieLogo">
          <img src={movie.logo} />
        </div>
      );
    }
  };

  useEffect(() => {
    if (hovered) {
      setLoadMovie(true);
    }
    if (!hovered) {
      setLoadMovie(false);
    }
  }, [hovered]);

  return (
    <div
      className="gridItem"
      style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {loadMovie && (
        <div
          className="miniModal"
          style={{
            height: `${size.itemHeight * 2.5}vw`,
            width: `${size.itemWidth * 1.5}vw`,
          }}
        >
          {loadMovie && (
            <MiniModal
              loadMovie={loadMovie}
              moviePoster={movie.image}
              movieTitle={movie.title}
              setLoadMovie={setLoadMovie}
              trailer={movie.trailer}
              runtime={movie.runtime}
              rating={movie.rating}
              movie={movie}
            />
          )}
        </div>
      )}

      <img
        src={movie.image}
        alt={movie.title}
        className="movie-image"
        style={{
          width: "0",
          height: "0",
          objectFit: "contain",
        }}
      />
      <div
        className="gridItemTitle"
        style={{ width: `${size.itemWidth * 0.9}vw`, overflow: `hidden` }}
      >
        {movieLogoCheck()}
      </div>
    </div>
  );
};
