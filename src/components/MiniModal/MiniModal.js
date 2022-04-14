import "./MiniModal.scss";
import MiniModalDetails from "../MiniModalDetails/MiniModalDetails";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import MiniModalVideo from "../MiniModalVideo/MiniModalVideo";
import { IconVolumeMute } from "../Icons/IconVolumeMute";
import { useState, useRef, useEffect } from "react";
import { fetchMovieDetailsAsync } from "../../redux/movies/movies.actions";

const MiniModal = ({ setLoadMovie, moviePoster, movieTitle, trailer, id }) => {
  const youtubeId = trailer.substr(32);
  const dispatch = useDispatch();
  const boxRef = useRef();
  const [active, setActive] = useState(true);
  const [start, setStart] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieDetailsAsync(id));
    console.log("INSIDE USE EFFECT");
  }, []);

  // console.log("trailer path: ", trailer);
  // console.log("trailer id: ", youtubeId);

  const remove = async () => {
    setStart(true);
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 5,
      ease: "power4",
      onComplete: () => setActive(false),
    });
  };

  return (
    <div
      className="modal"
      onMouseEnter={remove}
      onMouseLeave={() => {
        setLoadMovie(false);
      }}
    >
      <div className="top-container">
        {start && <MiniModalVideo youtubeId={youtubeId} />}

        {active && (
          <img
            ref={boxRef}
            src={moviePoster}
            alt={moviePoster}
            className="movie-poster"
          />
        )}

        <div className="overlay-items">
          <div className="video-title-wrapper">
            <div className="video-title">{movieTitle}</div>
          </div>

          <div className="volume-button-wrapper">
            <button className="volume-button">
              <IconVolumeMute />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <MiniModalDetails />
      </div>
    </div>
  );
};

export default MiniModal;
