import './MiniModalDetails.scss'
import { IconPlayBlack } from '../../Icons/IconPlayBlack'
import { IconArrowDown } from '../../Icons/IconArrowDown'
import { useSelector, useDispatch } from 'react-redux'
import { movieInfoModalToggle } from '../../../redux/movies/movies.actions'
import { useState } from 'react'
import ButtonRating from '../../ButtonRating/ButtonRating'
import ButtonAdd from '../../ButtonAdd/ButtonAdd'
import ButtonCheck from '../../ButtonCheck/ButtonCheck'
import FilmInfoModal from '../../FilmInfoModal/FilmInfoModal'

const MiniModalDetails = ({ runtime, rating, keywords, setIsVideoPlaying }) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.movies.movieInfoModal)

  const changeIcon = () => {
    !isChecked ? setIsChecked(true) : setIsChecked(false)
  }

  return (
    <>
      <div className='minimodal-button-wrapper'>
        <div className='left-content'>
          <button className='play-button'>
            <IconPlayBlack />
          </button>
          <div onClick={() => changeIcon()}>
            {isChecked ? <ButtonCheck /> : <ButtonAdd />}
          </div>
          <ButtonRating />
        </div>
        <div className='right-content'>
          <button
            className='moreInfo-button'
            onClick={() => {
              dispatch(movieInfoModalToggle(!isModalOpen))
              setIsVideoPlaying(false)
            }}>
            <IconArrowDown />
          </button>
        </div>
      </div>
      <div className='info-container'>
        <span className='match'>98% Match</span>
        <span className='maturity-rating'>{rating ? rating : '7'}</span>
        <span className='duration'>{runtime ? runtime : '1h 34m'}</span>
        <span className='feature-badge'>HD</span>
      </div>
      <div className='tag-container'>
        {keywords?.map((keyword, i) => (
          <>
            <span key={i} className='tag-item-mini'>
              {keyword}
            </span>
            {i !== keywords.length - 1 && (
              <span className='tag-item-circle'>•</span>
            )}
          </>
        ))}
      </div>
      <FilmInfoModal />
    </>
  )
}

export default MiniModalDetails
