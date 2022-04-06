import { IconKijkWijzer16 } from '../Icons/IconKijkWijzer16'
import { IconKijkWijzerGeweld } from '../Icons/IconKijkWijzerGeweld'
import { IconKijkWijzerGrof } from '../Icons/IconKijkWijzerGrof'
import './FilmInfoModalKijkWijzer.scss'

const FilmInfoModalKijkWijzer = () => {
  return (
    <>
      <button className='details-button details-add-button'>
        <IconKijkWijzer16 />
      </button>
      <button className='details-button details-like-button'>
        <IconKijkWijzerGeweld />
      </button>
      <button className='details-button details-dislike-button'>
        <IconKijkWijzerGrof />
      </button>
    </>
  )
}

export default FilmInfoModalKijkWijzer
