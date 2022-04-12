import './MiniModal.scss';
import MiniModalDetails from './MiniModalDetails';
import MiniModalOpened from './MiniModalOpened/MiniModalOpened';
import gsap from 'gsap'; 
import Video from './Video';
import { useState, useRef } from 'react';

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  trailer
}) => {
  const youtubeId = trailer.substr(32);
  const boxRef = useRef();
  const [active, setActive] = useState(true);
  const [start, setStart] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const remove = async () => {
    setStart(true);
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 5,
      ease: 'power4',
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
          {start && <Video youtubeId={youtubeId} />}

          {active && (
            <img
              ref={boxRef}
              src={moviePoster}
              alt={moviePoster}
              className="movie-poster"
            />
          )}

          <div className="video-title">{movieTitle}</div>
        </div>
        <div className="bottom-container">
        {moreInfo ? <MiniModalOpened /> : <MiniModalDetails setMoreInfo={setMoreInfo} moreInfo={moreInfo}/>}
        </div>
      </div>
    </>
  );
};

export default MiniModal;
