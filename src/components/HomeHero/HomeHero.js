import { useEffect, useRef } from 'react'
import './HomeHero.scss'
import { IconInfo } from '../Icons/IconInfo'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { gsap } from 'gsap'
import movieData from '../../movies.json'

const HomeHero = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const timeline = useRef()

  const newMovieData = movieData.slice(0, 1)

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add('start')
      .to(
        q('.title-wrapper'),
        {
          duration: 1.5,
          delay: 3,
          ease: 'power4.out',
          y: '8vh',
          scale: 0.8,
          transformOrigin: 'left bottom',
        },
        'start'
      )
      .to(
        q('.info-wrapper'),
        {
          opacity: 0,
          delay: 3,
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

        <div className='button-wrapper'>
          <button className='hero-button play-button'>
            <div className='button-icon'>
              <IconPlayBlack />
            </div>
            <div style={{ width: '1rem' }}></div>
            <span>Play</span>
          </button>

          <button className='hero-button info-button'>
            <div className='button-icon'>
              <IconInfo />
            </div>
            <div style={{ width: '1rem' }}></div>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
