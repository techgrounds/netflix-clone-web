import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './assets/scss/main.scss'

import { LangProvider } from './redux/languages/languages.context'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import GenrePage from './pages/GenrePage'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'
import SignInPage from './pages/SignInPage'
import HeaderGenre from './components/HeaderGenre/HeaderGenre'

function App() {
  return (
    <div className='App'>
      <LangProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route
                path='/home'
                element={
                  <>
                    <Navbar />
                    <HomePage />
                  </>
                }
              />
              <Route
                path='/genre'
                element={
                  <>
                    <Navbar />
                    <HeaderGenre />
                    <GenrePage />
                  </>
                }
              />
              <Route
                path='/search'
                element={
                  <>
                    <Navbar />
                    <SearchPage />
                  </>
                }
              />
              <Route path='/signin' element={<SignInPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </LangProvider>
    </div>
  )
}

export default App

