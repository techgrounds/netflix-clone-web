import React, { useState, useEffect} from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Navbar from '../components/Navbar/Navbar'
import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'

const HomePage = () => {
  const dispatch = useDispatch();
  const allMoviesSelector = useSelector((state) => state.movies.allMovies);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, []);

  return (
    <>
      <Navbar />
       <HomeHero
       setIsVideoPlaying={setIsVideoPlaying}
       isVideoPlaying={isVideoPlaying}
       isModalVisible={isModalVisible}
       setIsModalVisible={setIsModalVisible}
     />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane laneTitle={'lane title'} movies={movieSet} key={uuidv4()} />
        );
      })}

      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
