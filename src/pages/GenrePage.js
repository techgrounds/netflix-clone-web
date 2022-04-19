import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenresResultsAsync } from '../redux/genres/genres.actions'

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()
  const allMoviesSelector = useSelector((state) => state.genres.allGenres)
  const movieData = useSelector((state) => state.movies.movie)

  console.log(allMoviesSelector)

  useEffect(() => {
    dispatch(fetchGenresResultsAsync())
  }, [])

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        movieData={movieData}
      />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane
            laneTitle={movieSet.genre}
            movies={movieSet.movies}
            trailer={movieSet.trailer}
            key={movieSet.id}
          />
        )
      })}
      <FooterBrowserPage />
    </>
  )
}

export default HomePage
