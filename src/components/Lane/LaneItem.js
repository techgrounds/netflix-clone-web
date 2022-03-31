import useWindowSize from "./WindowSize";
import { useState,useEffect,useRef } from "react";
import MiniModal from "../MiniModal";
import gsap from "gsap"

export const LaneItem = ({
  updateZIndexRef,
  movie,
  leftIndex,
  rightIndex,
  index,
  sleep
}) => {
  const size = useWindowSize();

  const [loadMovie, setLoadMovie] = useState(false);

const modalRef = useRef();

useEffect(() => {
  const modal = modalRef.current;

  const timeline = gsap.timeline({default: { ease:"power4Out" , paused:true}})

  timeline.fromTo(modal, {scale:0.7, opacity:0, y:"5vw"}, { delay:0.5,duration: 2, scale:1 ,opacity:1,y:0})


}, [loadMovie])






  return (
    <div

      
      className="laneItem"
      style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}
      onMouseEnter={  () => {
        updateZIndexRef(999);
        setLoadMovie(true);
      }}
      onMouseLeave={() => {
        updateZIndexRef(0);
        // setLoadMovie(false);
      }}
    >
{ loadMovie &&     <div
ref={modalRef}
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

        }}
        onMouseLeave={() => {
          updateZIndexRef(0);

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
