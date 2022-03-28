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
          yPercent: '100',
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
    <>
      <div className='home-hero'>
        <div className='home-hero-row' role='region'>
          <div className='home-hero-container' ref={el}>
            <div className='home-hero-trailer-wrapper'>
              <video autoPlay loop muted className='home-hero-trailer'>
                <source src={require(`../../assets/videos/homehero.mp4`)} />
              </video>
              <div className='trailer-overlay overlay'></div>
              <div className='home-hero-overlay overlay'></div>
            </div>
            <div className='home-hero-fill-container'>
              <div className='home-hero-info'>
                <div className='logo-and-text'>
                  <div className='title-wrapper'>
                    {newMovieData.map((movieTitle) => {
                      return <h2>{movieTitle.title}</h2>
                    })}
                  </div>
                  <div className='info-wrapper'>
                    {newMovieData.map((movieDescription) => {
                      return <p>{movieDescription.description}</p>
                    })}
                  </div>
                  <div className='button-wrapper'>
                    <button className='home-hero-button home-hero-play-button has-icon has-label'>
                      <div className='button-icon'>
                        <IconPlayBlack />
                      </div>
                      <div style={{ width: '1rem' }}></div>
                      <span className='button-text'>Play</span>
                    </button>
                    <button
                      className='home-hero-button home-hero-info-button has-icon has-label'
                      onClick={openModal}
                    >
                      <div className='button-icon'>
                        <IconInfo />
                      </div>
                      <div style={{ width: '1rem' }}></div>
                      <span className='button-text'>More Info</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FilmInfoModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  )
}

export default HomeHero
