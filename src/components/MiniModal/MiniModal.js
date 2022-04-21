import './MiniModal.scss'
import MiniModalDetails from './MiniModalDetails/MiniModalDetails'
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import ButtonMute from '../ButtonMute/ButtonMute'
import { useState, useRef, useEffect } from 'react'
import {
  fetchMovieDetailsAsync,
  fetchSingleMovie,
} from '../../redux/movies/movies.actions'
import { useSelector, useDispatch } from 'react-redux'

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  movieTitle,
  trailer,
  mute,
  setMute,
  rating,
  runtime,
  movie,
  updateZIndexRef,
  setIsVideoPlaying,
}) => {
  const dispatch = useDispatch()
  const youtubeId = trailer.substr(32)

  useEffect(() => {
    dispatch(fetchSingleMovie(movie))
  }, [])

  const boxRef = useRef()
  const [active, setActive] = useState(true)
  const [start, setStart] = useState(false)

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
          <MiniModalVideo setMute={setMute} mute={mute} youtubeId={youtubeId} />
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
            <ButtonMute setMute={setMute} mute={mute} />
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <MiniModalDetails
          runtime={runtime}
          rating={rating}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      </div>
    </div>
  )
}

export default MiniModal
