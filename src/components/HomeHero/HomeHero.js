import './HomeHero.scss';
import { useEffect, useRef, useState } from 'react';
import { IconInfo } from '../Icons/IconInfo';
import { IconPlayBlack } from '../Icons/IconPlayBlack';
import { gsap } from 'gsap';
import movieData from '../../movies.json';
import FilmInfoModal from '../FilmInfoModal/FilmInfoModal';

//movieDB
import axios from '../../axiosInstance';
import requests from '../../requests';
import { motionValue } from 'framer-motion';

const HomeHero = () => {
  const element = useRef();
  const selector = gsap.utils.selector(element);
  const timeline = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [movie, setMovie] = useState([]);

  const openModal = () => {
    setIsModalVisible(true);
  };

  //movieDB
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      // const movieData = request.data;
      // console.log(movieData);
      // setMovie(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length)
      //   ]
      // );

      setMovie(
        request.data[Math.floor(Math.random() * request.data.length - 1) + 1]
      );

      console.log('MOVIE', movie.results);

      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add('start')
      .to(
        selector('.title-wrapper'),
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
        selector('.info-wrapper'),
        {
          opacity: 0,
          delay: 5,
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
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: 'center center',
            }}
          >
            {/* <video autoPlay loop muted className='home-hero-trailer'>
              <source src={require(`../../assets/videos/homehero.mp4`)} />
            </video> */}
            <div className="trailer-overlay overlay"></div>
            <div className="home-hero-overlay overlay"></div>
          </div>
          <div className="home-hero-fill-container">
            <div className="home-hero-info">
              <div className="logo-and-text">
                <div className="title-wrapper">
                  {/* <h2>{movieData[0].title}</h2> */}
                  <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                </div>
                <div className="info-wrapper">
                  {/* <p>{movieData[0].description}</p> */}
                  <p>{movie?.overview}</p>
                </div>
                <div className="button-wrapper">
                  <button className="home-hero-button home-hero-play-button has-icon has-label">
                    <div className="home-hero-button-icon">
                      <IconPlayBlack />
                    </div>
                    <div style={{ width: '0.5rem' }}></div>
                    <span className="home-hero-button-text">Play</span>
                  </button>
                  <button
                    className="home-hero-button home-hero-info-button has-icon has-label"
                    onClick={openModal}
                  >
                    <div className="home-hero-button-icon">
                      <IconInfo />
                    </div>
                    <div style={{ width: '0.5rem' }}></div>
                    <span className="home-hero-button-text">More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FilmInfoModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </div>
  );
};

export default HomeHero;
