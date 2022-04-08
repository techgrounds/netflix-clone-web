import { useState } from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage'
import Navbar from '../components/Navbar/Navbar'
import Lane from '../components/Lane/Lane'
import '../components/Lane/Lane.scss'

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <Navbar />
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
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
