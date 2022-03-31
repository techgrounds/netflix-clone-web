import './FilmInfoModal.scss';
import { IconClose } from '../Icons/IconClose';
import {
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilmInfoModalHeader from '../FilmInfoModalHeader/FilmInfoModalHeader';
import FilmInfoModalDetails from '../FilmInfoModalDetails/FilmInfoModalDetails';
import FilmInfoModalSuggestions from '../FilmInfoModalSuggestions/FilmInfoModalSuggestions';
import FilmInfoModalFooter from '../FilmInfoModalFooter/FilmInfoModalFooter';

const FilmInfoModal = forwardRef((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setIsModalVisible(true),
      close: () => setIsModalVisible(false),
    };
  });

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && isModalVisible) {
        setIsModalVisible(false);
      }
    },
    [setIsModalVisible, isModalVisible]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (isModalVisible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalVisible]);

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
          className="modal-background"
        >
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
            className="modal-container"
          >
            <div className="modal-content">
              <div className="modal-header">
                <FilmInfoModalHeader />
              </div>
              <div className="modal-description">
                <div className="modal-details">
                  <FilmInfoModalDetails />
                </div>
                <div className="modal-suggestions">
                  <FilmInfoModalSuggestions />
                </div>
              </div>
              <div className="modal-footer">
                <FilmInfoModalFooter />
              </div>
              <button
                className="modal-close-button"
                onClick={() => setIsModalVisible(false)}
              >
                <IconClose />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default FilmInfoModal;
