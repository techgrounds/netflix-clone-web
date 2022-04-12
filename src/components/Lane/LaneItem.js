import useWindowSize from './WindowSize'
import { useState, useEffect, useRef } from 'react'
import MiniModal from '../MiniModal/MiniModal'
import '../Lane/Lane.scss'


export const LaneItem = ({
  setIsVideoPlaying,
  updateZIndexRef,
  movie,
  leftIndex,
  rightIndex,
  index,
  }) => {
  const size = useWindowSize();
  const [loadMovie, setLoadMovie] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  useEffect(async () => {
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
        setHovered(false);
        setMoreInfo(false);
      }}
    >
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
          style={!moreInfo ? {
            height: `${size.itemHeight * 2.5}vw`,
            width: `${size.itemWidth * 1.5}vw`,
          } : {
            height:'100vh',
            width: '50vw',
          }
        }
        >
          {loadMovie && (
            <MiniModal
              loadMovie={loadMovie}
              moviePoster={movie.image}
              movieTitle={movie.title}
              setLoadMovie={setLoadMovie}
              trailer={movie.trailer}
              moreInfo={moreInfo}
              setMoreInfo={setMoreInfo}
              setIsVideoPlaying={setIsVideoPlaying}
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
        className='laneItemTitle'
        style={{ width: `${size.itemWidth * 0.9}vw`, overflow: `hidden` }}>
        {movie.title}
      </div>
    </div>
  )
}
