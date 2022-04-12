import '../../HomeHero/HomeHero.scss'
import { useRef } from 'react'
import { IconInfo } from '../../Icons/IconInfo'
import { IconPlayBlack } from '../../Icons/IconPlayBlack'
import { IconVolumeMute } from '../../Icons/IconVolumeMute'
import FilmInfoModal from '../../FilmInfoModal/FilmInfoModal'

const MiniModalOpened = ({
  setIsVideoPlaying,
  isVideoPlaying,
  setIsModalVisible,
  isModalVisible,
}) => {
  const element = useRef()

  return (
      <div className="home-hero-row">
        <div className="home-hero-container" ref={element}>
          <div className="home-hero-fill-container">
            <div className="home-hero-info">
              <div className="button-wrapper">
                <button className="home-hero-button home-hero-play-button has-icon">
                  <div className="home-hero-button-icon">
                    <IconPlayBlack />
                  </div>
                  <div className="breadcrumb"></div>
                  <span className="home-hero-button-text">Play</span>
                </button>
                <button
                  className="home-hero-button home-hero-info-button has-icon"
                >
                  <div className="home-hero-button-icon">
                    <IconInfo />
                  </div>
                  <div className="breadcrumb"></div>
                  <span className="home-hero-button-text">More Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <FilmInfoModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setIsVideoPlaying={setIsVideoPlaying}
          isVideoPlaying={isVideoPlaying}
        />
        <div className='home-hero-buttton-component'>
          <span className='home-hero-volume-button-wrapper'>
            <button className='home-hero-volume-button'>
              <IconVolumeMute />
            </button>
          </span>
        </div>
      </div>
  );
};

export default MiniModalOpened;
