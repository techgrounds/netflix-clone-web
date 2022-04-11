// import React from 'react';

// import Navbar from '../components/Navbar/Navbar';
// import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';

// const GenrePage = () => {
//   return (
//     <>
//       <Navbar />
//       <div>Genre Page</div>
//       <FooterBrowserPage />
//     </>
//   );
// };

// export default GenrePage;


import React, { useEffect, useState } from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from '../components/Lane/Lane';
import '../components/Lane/Lane.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresResultsAsync } from '../redux/genres/genres.actions';
import { v4 as uuidv4 } from 'uuid';


const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch();
  const allMoviesSelector = useSelector((state) => state.genres.allGenres);

  console.log(allMoviesSelector)

  useEffect(() => {
    dispatch(fetchGenresResultsAsync());
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
          <Lane 
            laneTitle={movieSet.genre} 
            movies={movieSet.movies} 
            trailer={movieSet.trailer} 
            key={uuidv4()} />
        );
      })}
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
