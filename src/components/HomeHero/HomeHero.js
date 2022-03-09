import './HomeHero.scss'

const HomeHero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>

      <div className='hero-description'>
        <h2>Queen</h2>
        <p>of the</p>
        <h2>South</h2>
        <p className='hero-info'>
          Forced to work for a cartel that recently killed her boyfriend, Teresa
          relies on her street smarts, a loyal friend and a mysterious notebook
          to survive.
        </p>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default HomeHero
