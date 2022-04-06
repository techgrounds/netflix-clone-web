import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Navbar from '../components/Navbar/Navbar'
import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'
import { useState } from 'react'

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  return (
    <>
      <Navbar />
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
      />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <FooterBrowserPage />
    </>
  )
}

export default HomePage
