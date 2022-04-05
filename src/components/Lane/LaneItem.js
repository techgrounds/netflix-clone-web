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
  const [hovered, setHovered] = useState(0);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  return (
    <div
      className="laneItem"
      style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}
      onMouseEnter={() => {
        setHovered(1);
        console.log('hovered: ',hovered);
        // await sleep(1000);
        //   if (hovered === true) {
        //    updateZIndexRef(999);
        //    setLoadMovie(true);
        //    console.log('enter')
        //  }
        }
      }
      onMouseLeave={() => {
        setHovered(false)
        updateZIndexRef(0);
        setLoadMovie(false);
        console.log('leave')
      }}
    >
{ loadMovie &&     <div
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

        onMouseEnter={() => {
          updateZIndexRef(999);
          // setLoadMovie(true);
        }}
        onMouseLeave={() => {
          updateZIndexRef(0);
          // setLoadMovie(false);
        }}


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
      </div>}

      <img
        src={require(`../../assets/mockup_images/${movie.id}`)}
        alt={movie.title}
        className="movie-image"
      />
    </div>
  );
};
