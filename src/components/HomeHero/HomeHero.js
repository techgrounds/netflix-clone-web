import './HomeHero.scss'
import { useEffect, useRef, useState } from 'react'
import { IconInfo } from '../Icons/IconInfo'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { gsap } from 'gsap'
import movieData from '../../movies.json'
import FilmInfoModal from '../FilmInfoModal/FilmInfoModal'

const HomeHero = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const timeline = useRef()
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  const newMovieData = movieData.slice(0, 1)

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add('start')
      .to(
        q('.title-wrapper'),
        {
          duration: 1.5,
          delay: 5,
          ease: 'power4.out',
          y: '8rem',
          scale: 0.8,
          transformOrigin: 'left bottom',
        },
        'start'
      )
      .to(
        q('.info-wrapper'),
        {
          opacity: 0,
          delay: 5,
          ease: 'power4',
        },
        'start'
      )
  }, [q])

  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>

      <div className='hero-description' ref={el}>
        <div className='title-wrapper'>
          {newMovieData.map((movieDetail, index) => {
            return <h2 key={index}>{movieDetail.title}</h2>
          })}
        </div>

        <div className='info-wrapper'>
          {newMovieData.map((movieDetail, index) => {
            return <p key={index}>{movieDetail.description}</p>
          })}
        </div>
      </div>
      <div className='button-wrapper'>
        <button className='hero-button hero-play-button'>
          <div className='button-icon'>
            <IconPlayBlack />
          </div>
          <div style={{ width: '1rem' }}></div>
          <span>Play</span>
        </button>

        <button className='hero-button hero-info-button' onClick={openModal}>
          <div className='button-icon'>
            <IconInfo />
          </div>
          <div style={{ width: '1rem' }}></div>
          <span>More Info</span>
        </button>
      </div>
      <FilmInfoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default HomeHero
