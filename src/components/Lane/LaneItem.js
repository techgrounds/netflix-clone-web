import useWindowSize from "./WindowSize";
import { useState, useEffect, useRef } from "react";
import MiniModal from "../MiniModal";
import "../Lane/Lane.scss";

export const LaneItem = ({
  updateZIndexRef,
  movie,
  leftIndex,
  rightIndex,
  index,
}) => {
  const size = useWindowSize();
  const [loadMovie, setLoadMovie] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(async () => {
    if (hovered) {
      updateZIndexRef(999);
      setLoadMovie(true);
    }
    if (!hovered) {
      updateZIndexRef(0);
      setLoadMovie(false);
    }
  },[hovered]);

  return (
    <div
      className="laneItem"
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
              width: `${size.itemWidth * 1.5}vw`}}
        >
          {loadMovie && (
            <MiniModal
              loadMovie={loadMovie}
              moviePoster={movie.id}
              movieTitle={movie.title}
              setLoadMovie={setLoadMovie}
              updateZIndexRef={updateZIndexRef}
            />
          )}
        </div>
      )}

      <img
        src={require(`../../assets/mockup_images/${movie.id}`)}
        alt={movie.title}
        className="movie-image"
      />
    </div>
  );
};
