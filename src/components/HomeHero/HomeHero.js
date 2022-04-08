import './HomeHero.scss';
import { useEffect, useRef, useState } from 'react';
import { IconInfo } from '../Icons/IconInfo';
import { IconPlayBlack } from '../Icons/IconPlayBlack';
import { IconVolumeMute } from '../Icons/IconVolumeMute'
import { IconKijkWijzer16 } from '../Icons/IconKijkWijzer16'
import { gsap } from 'gsap';
import FilmInfoModal from '../FilmInfoModal/FilmInfoModal';
import Video from '../MiniModal/Video';
import billboardHeroTitle from '../../assets/hero-img/billboard-title.webp';
import billboardHeroImg from '../../assets/hero-img/billboard.webp';
import { useSelector } from 'react-redux';

const HomeHero = ({ setIsVideoPlaying,
  isVideoPlaying,
  setIsModalVisible,
  isModalVisible, }) => {
  const element = useRef();
  const timeline = useRef();
  const selector = gsap.utils.selector(element);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const movie = useSelector((state) => state.movies.movie);

  const youtubeId = '65xa8TG2G8o';

  const openModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add('start')
      .to(
        selector('.title-wrapper'),
        {
          duration: 2,
          delay: 25,
          ease: 'power4.out',
          yPercent: '40',
          scale: 0.8,
          transformOrigin: 'left bottom',
        },
        'start'
      )
      .to(
        selector('.info-wrapper'),
        {
          opacity: 0,
          delay: 25,
          ease: 'power4',
        },
        'start'
      );
  }, [selector]);

  return (
    <div className="home-hero">
      <div className="home-hero-row">
        <div className="home-hero-container" ref={element}>
          <div
            className="home-hero-trailer-wrapper"
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.image}")`,
              backgroundPosition: 'center center',
            }}
          >
            {/* {isVideoPlaying ? (
              <Video youtubeId={youtubeId} />
            ) : (
              <img
                src={billboardHeroImg}
                className='home-hero-trailer'
                alt={billboardHeroImg}
              />
            )} */}
            <div className="trailer-overlay overlay"></div>
            <div className="home-hero-overlay overlay"></div>
          </div>
          <div className="home-hero-fill-container">
            <div className="home-hero-info">
              <div className="title-wrapper">
                <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                {/* <img
                  src={billboardHeroTitle}
                  alt='Abstract: The Art of Design'
                /> */}
              </div>
              <div className="info-wrapper">
                <p>{movie?.overview}</p>
                {/* <p>
                  Step inside the minds of the most innovative designers in a
                  variety of disciplines and learn how design impacts every
                  aspect of life.
                </p> */}
              </div>
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
                  onClick={() => {
                    openModal();
                    setIsVideoPlaying(false);
                  }}
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
          <span className='home-hero-maturity-rating'>
            <IconKijkWijzer16 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
