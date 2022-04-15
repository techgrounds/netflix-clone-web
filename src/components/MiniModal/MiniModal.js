import './MiniModal.scss'
import MiniModalDetails from './MiniModalDetails'
import MiniModalDetailsOpen from './MiniModalDetailsOpen';
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp';
import { useState, useRef } from 'react'

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  trailer,
  moreInfo,
  setMoreInfo
 }) => {
  const youtubeId = trailer.substr(32)
  const boxRef = useRef()
  const [active, setActive] = useState(true)
  const [start, setStart] = useState(false)
  const [muteIcon, setMuteIcon] = useState(false)
  const switchMute = () => {
    document.getElementById("sound").muted = true
    console.log("muted")
    setMuteIcon(!muteIcon)}

  const remove = async () => {
    setStart(true);
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 4,
      ease: 'power4',
      onComplete: () => setActive(false)
    })
  }

  return (
    <div
      className='modal'
      id="sound"
      onMouseEnter={
        remove}

      onMouseLeave={() => {
        setLoadMovie(false);
      }}
    >
      <div className="top-container">
        {start && <MiniModalVideo
        setMuteIcon={setMuteIcon}
        muteIcon={muteIcon}
        youtubeId={youtubeId}/>}
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
            <button className="volume-button" onClick={switchMute}>
              {!muteIcon ? <IconVolumeMute/> : <IconVolumeUp/>}
            </button>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
      {!moreInfo ? <MiniModalDetails setMoreInfo={setMoreInfo} moreInfo={moreInfo}/>:
        <MiniModalDetailsOpen />}
      </div>
    </div>
  );
};

export default MiniModal;
