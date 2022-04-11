import './MiniModal.scss'
import MiniModalDetails from '../MiniModalDetails/MiniModalDetails'
import gsap from 'gsap'
import MiniModalVideo from '../MiniModalVideo/MiniModalVideo'
import { useState, useRef } from 'react'

const MiniModal = ({ setLoadMovie, moviePoster, movieTitle }) => {
  const youtubeId = '65xa8TG2G8o'
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

  return (
    <>
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

          <div className='video-title'>{movieTitle}</div>
        </div>
        <div className='bottom-container'>
          <MiniModalDetails />
        </div>
      </div>
    </>
  )
}

export default MiniModal
