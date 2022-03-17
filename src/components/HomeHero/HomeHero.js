import './HomeHero.scss'
import { useRef, useEffect } from 'react'
import { IconInfo } from '../Icons/IconInfo'
import { IconPlayBlack } from '../Icons/IconPlayBlack'
import { gsap } from 'gsap'

const HomeHero = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const timeline = useRef()

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add('start')
      .to(
        q('.title-wrapper'),
        {
          duration: 2,
          delay: 3,
          ease: 'none',
          y: 100,
          x: -70,
          scale: 0.8,
        },
        'start'
      )
      .to(
        q('.info-wrapper'),
        {
          opacity: 0,
          delay: 3,
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
          <h2>The Bombardment</h2>
        </div>

        <div className='info-wrapper'>
          <p>
            The fates of several Copenhagen residents collide when a WWII
            bombing mission accidentally targets a school full of children.
          </p>
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
