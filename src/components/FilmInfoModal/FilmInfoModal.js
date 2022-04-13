import './FilmInfoModal.scss'

import { IconClose } from '../Icons/IconClose'
import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useOutsideClick from '../../hooks/useOutsideClick'

import FilmInfoModalHeader from '../FilmInfoModalHeader/FilmInfoModalHeader'
import FilmInfoModalDetails from '../FilmInfoModalDetails/FilmInfoModalDetails'
import FilmInfoModalSuggestions from '../FilmInfoModalSuggestions/FilmInfoModalSuggestions'
import FilmInfoModalFooter from '../FilmInfoModalFooter/FilmInfoModalFooter'

const FilmInfoModal = ({
  isModalVisible,
  setIsModalVisible,
  setIsVideoPlaying,
}) => {
  const modalQuit = useRef()

  useOutsideClick(modalQuit, () => {
    if (isModalVisible) {
      setIsModalVisible(false)
      setIsVideoPlaying(true)
    }
  })

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && isModalVisible) {
        setIsModalVisible(false)
        setIsVideoPlaying(true)
      }
    },
    [setIsModalVisible, isModalVisible, setIsVideoPlaying]
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
                <FilmInfoModalHeader />
              </div>
              <div className='modal-description'>
                <div className='modal-details'>
                  <FilmInfoModalDetails />
                </div>
                <div className='modal-suggestions'>
                  <FilmInfoModalSuggestions />
                </div>
              </div>
              <div className='modal-footer'>
                <FilmInfoModalFooter />
              </div>
              <button
                className='modal-close-button'
                onClick={() => {
                  setIsModalVisible(false)
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
