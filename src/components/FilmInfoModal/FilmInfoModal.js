import './FilmInfoModal.scss'
import { useSelector, useDispatch } from 'react-redux'
import { IconClose } from '../Icons/IconClose'
import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movieInfoModalToggle } from '../../redux/movies/movies.actions'
import useOutsideClick from '../../hooks/useOutsideClick'
import FilmInfoModalHeader from '../FilmInfoModalHeader/FilmInfoModalHeader'
import FilmInfoModalDetails from '../FilmInfoModalDetails/FilmInfoModalDetails'
import FilmInfoModalSuggestions from '../FilmInfoModalSuggestions/FilmInfoModalSuggestions'
import FilmInfoModalFooter from '../FilmInfoModalFooter/FilmInfoModalFooter'
import { fetchMovieDetailsAsync } from '../../redux/movies/movies.actions'

const FilmInfoModal = ({ setIsVideoPlaying }) => {
  const dispatch = useDispatch()
  const modalQuit = useRef()
  const isModalVisible = useSelector((state) => state.movies.movieInfoModal)

  useOutsideClick(modalQuit, () => {
    if (isModalVisible) {
      dispatch(movieInfoModalToggle(!isModalVisible))
      setIsVideoPlaying(true)
    }
  })

  const movieData = useSelector((state) => state.movies.movie)

  useEffect(() => {
    dispatch(fetchMovieDetailsAsync(movieData?.id))
  }, [movieData?.id])

  const movieDetails = useSelector(
    (state) => state.movies.movieDetails.movieDetailsResults
  )

  const {
    actors,
    certificationDefinition,
    directors,
    genres,
    releaseDate,
    writers,
    setMute,
    mute,
  } = movieDetails

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && isModalVisible) {
        dispatch(movieInfoModalToggle(!isModalVisible))
        setIsVideoPlaying(true)
      }
    },
    [isModalVisible, setIsVideoPlaying, dispatch]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <AnimatePresence>
      {isModalVisible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
          className='modal-background'>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.6,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2,
              },
            }}
            className='modal-container'
            ref={modalQuit}>
            <div className='modal-content'>
              <div className='modal-header'>
                <FilmInfoModalHeader
                  movieData={movieData}
                  setMute={setMute}
                  mute={mute}
                />
              </div>
              <div className='modal-description'>
                <div className='modal-details'>
                  <FilmInfoModalDetails
                    actors={actors}
                    genres={genres}
                    directors={directors}
                    releaseDate={releaseDate}
                    movieData={movieData}
                  />
                </div>
                <div className='modal-suggestions'>
                  <FilmInfoModalSuggestions />
                </div>
              </div>
              <div className='modal-footer'>
                <FilmInfoModalFooter
                  actors={actors}
                  genres={genres}
                  directors={directors}
                  writers={writers}
                  certification={certificationDefinition}
                  movieData={movieData}
                />
              </div>
              <button
                className='modal-close-button'
                onClick={() => {
                  dispatch(movieInfoModalToggle(!isModalVisible))
                  setIsVideoPlaying(true)
                }}>
                <IconClose />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FilmInfoModal
