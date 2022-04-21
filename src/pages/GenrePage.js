import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
// import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenresResultsAsync } from '../redux/genres/genres.actions'
import { GenreGrid } from '../components/GenreGrid/GenreGrid'

const GenrePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()
  const moviesByGenreData = useSelector((state) => state.genres.allGenres[0])
  const movieData = useSelector((state) => state.movies.movie)

  useEffect(() => {
    dispatch(fetchGenresResultsAsync())
  }, [])

  console.log('moviesByGenreDataJanou', moviesByGenreData)

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        movieData={movieData}
      />

      <div>
        {moviesByGenreData?.movies && (
          <GenreGrid
            genreTitle={moviesByGenreData.genre}
            moviesByGenreData={moviesByGenreData?.movies}
          />
        )}


      </div>

      <FooterBrowserPage />
    </>
  )
}

export default GenrePage
