import "./MiniModal.scss";
import MiniModalDetails from "./MiniModalDetails";
import gsap from "gsap";

import Video from "./Video";

import { useState, useRef, useEffect } from "react";

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  updateZIndexRef,
}) => {
  const youtubeId = "65xa8TG2G8o";

  const boxRef = useRef();
  const [active, setActive] = useState(true);
  const [start, setStart] = useState(false);

  const remove = () => {
    setStart(true);
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 4,
      ease: "power4",
      onComplete: () => setActive(false),
    });
  };

  return (
    <>
      <div
        className="modal"
        onMouseEnter={remove}
        onMouseLeave={() => {
          setLoadMovie(false);
        }}
      >
        <div className="top-container">
          {/* {start && <Video youtubeId={youtubeId} />} */}

          {active && (
            <img
              ref={boxRef}
              src={require(`../../assets/mockup_images/${moviePoster}`)}
              alt={moviePoster}
              className="movie-poster"
            />
          )}

          <div className="video-title">{movieTitle}</div>
        </div>
        <div className="bottom-container">
          <MiniModalDetails />
        </div>
      </div>
    </>
  );
};

export default MiniModal;
