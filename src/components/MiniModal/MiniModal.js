import './MiniModal.scss'
import MiniModalDetails from './MiniModalDetails'
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconVolumeUp } from '../Icons/IconVolumeUp'
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'


const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  trailer,
  moreInfo,
  setMoreInfo,
  setIsModalVisible,
  updateZIndexRef,
  openModal,
  isModalVisible,
  mute,
  setMute,
}) => {
  console.log("Mute in miniModal: ", mute)
  const youtubeId = trailer.substr(32)
  const boxRef = useRef()
  const [active, setActive] = useState(true)
  const [start, setStart] = useState(false)
  const switchMute = () => {
    setMute(!mute)
    console.log("mute: ",mute)
  }
  const movieData = useSelector((state) => state.movies.movie)

  const remove = async () => {
    setStart(true)
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 4,
      ease: 'power4',
      onComplete: () => setActive(false),
    })
  }

  updateZIndexRef(999)

  return (
    <div
      className='modal'
      onMouseEnter={remove}
      onMouseLeave={() => {
        setLoadMovie(false)
      }}>
      <div className='top-container'>
        {start && (
          <MiniModalVideo
            setMute={setMute}
            mute={mute}
            youtubeId={youtubeId}
          />
        )}
        {active && (
          <img
            ref={boxRef}
            src={moviePoster}
            alt={moviePoster}
            className='movie-poster'
          />
        )}

        <div className='overlay-items'>
          <div className='video-title-wrapper'>
            <div className='video-title'>{movieTitle}</div>
          </div>

          <div className='volume-button-wrapper'>
            <button className='volume-button' onClick={switchMute}>
              {!mute ? <IconVolumeMute /> : <IconVolumeUp />}
            </button>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <MiniModalDetails
          moviePoster={moviePoster}
          movieTitle={movieTitle}
          trailer={trailer}
          openModal={openModal}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          movieData={movieData}
          setMoreInfo={setMoreInfo}
          moreInfo={moreInfo}
        />
      </div>
    </div>
  )
}

export default MiniModal
