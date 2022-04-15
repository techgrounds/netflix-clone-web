import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Lane from '../components/Lane/Lane'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesResultsAsync } from '../redux/movies/movies.actions'
import { v4 as uuidv4 } from 'uuid'

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const dispatch = useDispatch()
  const allMoviesSelector = useSelector((state) => state.movies.allMovies)
  const movieData = useSelector((state) => state.movies.movie)

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync())
  }, [])

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        openModal={openModal}
        movieData={movieData}
        allMoviesSelector={allMoviesSelector}
      />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane
            laneTitle={movieSet.genre}
            movies={movieSet.movies}
            trailer={movieSet.trailer}
            openModal={openModal}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            key={uuidv4()}
          />
        )
      })}
      <FooterBrowserPage />
    </>
  )
}

export default HomePage
