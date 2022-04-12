import '../../FilmInfoModal/FilmInfoModal.scss'
import { IconClose } from '../../Icons/IconClose'
import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useOutsideClick from '../../../hooks/useOutsideClick'
import FilmInfoModalHeader from '../../FilmInfoModalHeader/FilmInfoModalHeader'
import FilmInfoModalDetails from '../../FilmInfoModalDetails/FilmInfoModalDetails'
import FilmInfoModalSuggestions from '../../FilmInfoModalSuggestions/FilmInfoModalSuggestions'
import FilmInfoModalFooter from '../../FilmInfoModalFooter/FilmInfoModalFooter'
import MiniModal from '../MiniModal'

const  MiniModalDetailsOpen =  () => {
    return(
      <div className="MiniModalDetailsOpen">
        <FilmInfoModalDetails />
        <FilmInfoModalSuggestions />
      </div>
    )}

export default MiniModalDetailsOpen;