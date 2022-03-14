import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/scss/main.scss';

import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
<<<<<<< HEAD
// gitimport FooterLandingPage from './components/FooterLandingPage/FooterLandingPage';
=======
>>>>>>> 6f4969e565ca10575893be4f9dcf397cd280b32e

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/genre" element={<GenrePage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
<<<<<<< HEAD
          {/* <FooterBrowserPage /> */}
=======
>>>>>>> 6f4969e565ca10575893be4f9dcf397cd280b32e
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
