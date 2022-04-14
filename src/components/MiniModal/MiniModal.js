import './MiniModal.scss'
import MiniModalDetails from '../MiniModalDetails/MiniModalDetails'
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  trailer,
  openModal,
  isModalVisible,
  setIsModalVisible,
}) => {
  const youtubeId = trailer.substr(32)
  const boxRef = useRef()
  const [active, setActive] = useState(true)
  const [start, setStart] = useState(false)
  const movieData = useSelector((state) => state.movies.movie)

  console.log(movieData.id)

  const laneOpenModal = () => {
    setIsModalVisible(true)
  }

  const remove = async () => {
    setStart(true)
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 5,
      ease: 'power4',
      onComplete: () => setActive(false),
    })
  }

  return (
    <div
      className='modal'
      onMouseEnter={remove}
      onMouseLeave={() => {
        setLoadMovie(false)
      }}>
      <div className='top-container'>
        {start && <MiniModalVideo youtubeId={youtubeId} />}

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
            <button className='volume-button'>
              <IconVolumeMute />
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
          laneOpenModal={laneOpenModal}
          setIsModalVisible={setIsModalVisible}
          movieData={movieData}
        />
      </div>
    </div>
  )
}

export default MiniModal
