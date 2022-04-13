import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'
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
      />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane
            laneTitle={movieSet.genre}
            movies={movieSet.movies}
            trailer={movieSet.trailer}
            setIsVideoPlaying={setIsVideoPlaying}
            openModal={openModal}
            key={uuidv4()}
          />
        )
      })}
      <FooterBrowserPage />
    </>
  )
}

export default HomePage
