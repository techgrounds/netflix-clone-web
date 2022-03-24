import './FilmInfoModal.scss'
import { IconClose } from '../Icons/IconClose'
import { useRef, useEffect, useCallback } from 'react'
import FilmInfoModalHeader from '../FilmInfoModalHeader/FilmInfoModalHeader'
import FilmInfoModalDetails from '../FilmInfoModalDetails/FilmInfoModalDetails'
import FilmInfoModalSuggestions from '../FilmInfoModalSuggestions/FilmInfoModalSuggestions'
import FilmInfoModalFooter from '../FilmInfoModalFooter/FilmInfoModalFooter'

const FilmInfoModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  useEffect(() => {
    if (showModal === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  return (
    <>
      {showModal ? (
        <div onClick={closeModal} ref={modalRef} className='modal-background'>
          <div className='modal-container'>
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

            <button className='modal-close-button'>
              <IconClose />
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default FilmInfoModal
