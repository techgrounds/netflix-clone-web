import useWindowSize from "./WindowSize";
import { useState } from "react";
import MiniModal from "../MiniModal";

export const LaneItem = ({
  updateZIndexRef,
  movie,
  leftIndex,
  rightIndex,
  index,
}) => {
  const size = useWindowSize();

  const [loadMovie, setLoadMovie] = useState(false);

  return (
    <div
      className="laneItem"
      style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}
      onMouseEnter={() => {
        updateZIndexRef(1);
        setLoadMovie(true);
      }}
      onMouseLeave={() => {
        updateZIndexRef(0);
        setLoadMovie(false);
      }}
    >
      <div
        className={`miniModal
                 ${
                   index === leftIndex
                     ? "leftModal"
                     : index === rightIndex
                     ? "rightModal"
                     : "not"
                 }
                 `}
        style={{
          height: `${size.itemHeight * 2.5}vw`,
          width: `${size.itemWidth * 1.5}vw`,
        }}
      >
        {loadMovie && (
          <MiniModal
            loadMovie={loadMovie}
            moviePoster={movie.id}
            movieTitle={movie.title}
          />
        )}
      </div>
      <img
        src={require(`../../assets/mockup_images/${movie.id}`)}
        alt={movie.title}
        className="movie-image"
      />
    </div>
  );
};
