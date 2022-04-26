import { useState } from 'react'
import './HeaderGenre.scss'
import DropDownGenres from '../../components/DropDownGenres/DropDownGenres'
import { IconList } from '../Icons/IconList'
import { IconGallery } from '../Icons/IconGallery'

function HeaderGenre() {
  const [isScrolledUp, setIsScrolledUp] = useState(false)

  window.onscroll = () => {
    setIsScrolledUp(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <>
      <div
        className={
          isScrolledUp
            ? 'container-header-genre scrolled-up '
            : 'container-header-genre'
        }>
        <div className='title-header-genre'>
          <h2>Films</h2>
        </div>
        <DropDownGenres className='flexgrow-drowpdown' />
        {/* <div className='container-icons-left'>
          <button className='toggle-list-icon'>
            <IconList className='border-icons' />
          </button>
          <button className='toggle-row-icon'>
            <IconGallery />
          </button>
        </div> */}
      </div>
    </>
  )
}

export default HeaderGenre
