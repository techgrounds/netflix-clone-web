import './MiniModal.scss'
import MiniModalDetails from './MiniModalDetails'
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import ButtonMute from '../ButtonMute/ButtonMute'

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
  setIsVideoPlaying
}) => {

  const youtubeId = trailer.substr(32)
  const boxRef = useRef()
  const [active, setActive] = useState(true)
  const [start, setStart] = useState(false)
  const movieData = useSelector((state) => state.movies.movie)
  const remove = () => {
    setStart(true)
     gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 4,
      ease: 'power4',
      onComplete: () => setActive(false)},
      // setIsVideoPlaying(false)
    )
  }

  updateZIndexRef(999)

  return (
    <div
      className='modal'
      onMouseEnter={remove}
      onMouseLeave={() => {
        setLoadMovie(false)
        // setIsVideoPlaying(true)
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

            <ButtonMute
             setMute={setMute}
             mute={mute}
             />

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
