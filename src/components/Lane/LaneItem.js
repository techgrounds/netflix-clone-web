import useWindowSize from './WindowSize'
import { useState, useEffect } from 'react'
import MiniModal from '../MiniModal/MiniModal'
import '../Lane/Lane.scss'

export const LaneItem = ({
  updateZIndexRef,
  movie,
  leftIndex,
  rightIndex,
  index,
  mute,
  setMute,
}) => {
  const size = useWindowSize()
  const [loadMovie, setLoadMovie] = useState(false)
  const [hovered, setHovered] = useState(false)
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  const movieLogoCheck = () => {
  if (movie.logo === "") {return movie.title};
  if (movie.logo !== "") {return <img src={movie.logo} />};
  }


  useEffect(() => {
    if (hovered) {
      updateZIndexRef(999)
      setLoadMovie(true)
    }
    if (!hovered) {
      updateZIndexRef(0)
      setLoadMovie(false)
    }
  }, [hovered])

  return (
    <div
      className='laneItem'
      style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}>
      {loadMovie && (
        <div
          className={`miniModal
                 ${
                   index === leftIndex
                     ? 'leftModal'
                     : index === rightIndex
                     ? 'rightModal'
                     : 'not'
                 }
                 `}
          style={{
            height: `${size.itemHeight * 2.5}vw`,
            width: `${size.itemWidth * 1.5}vw`,
          }}>
          {loadMovie && (
            <MiniModal
              loadMovie={loadMovie}
              moviePoster={movie.image}
              movieTitle={movie.title}
              setLoadMovie={setLoadMovie}
              updateZIndexRef={updateZIndexRef}
              trailer={movie.trailer}
              runtime={movie.runtime}
              rating={movie.rating}
              keywords={movie.keywords}
              movie={movie}
              mute={mute}
              setMute={setMute}
            />
          )}
        </div>
      )}

      <img
        src={movie.image}
        alt={movie.title}
        className='movie-image'
        style={{
          width: '0',
          height: '0',
          objectFit: 'contain',
        }}
      />
      <div
        className="laneItemTitle"
        style={{ width: `${size.itemWidth * 0.9}vw`, overflow: `hidden` }}
      >
        <div className="movieLogo">
        {movieLogoCheck()}
        </div>
      </div>
    </div>
  )
}
