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
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [mute, setMute] = useState(false)
  console.log("Mute in Homepage: ", mute)

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
        isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn}
        mute={mute}
        setMute={setMute}
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
            mute={mute}
            setMute={setMute}
          />
        )
      })}
      <FooterBrowserPage />
    </>
  )
}

export default HomePage
