import './FilmInfoModal.scss'
import { IconClose } from '../Icons/IconClose'
import { useRef, useEffect, useCallback } from 'react'
import FilmInfoModalHeader from '../FilmInfoModalHeader/FilmInfoModalHeader'
import FilmInfoModalDetails from '../FilmInfoModalDetails/FilmInfoModalDetails'

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
        <div onClick={closeModal} ref={modalRef} className='background'>
          <div className='modal-wrapper'>
            <FilmInfoModalHeader />
            <button className='close-button'>
              <IconClose />
            </button>
            <FilmInfoModalDetails />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default FilmInfoModal
