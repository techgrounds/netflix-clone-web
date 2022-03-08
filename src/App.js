import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/scss/main.scss";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DiscoverPage from "./pages/DiscoverPage";
import FilmsPage from "./pages/FilmsPage";
import LogoutPage from "./pages/LogoutPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/browse" element={<DiscoverPage />} />
            <Route exact path="/films" element={<FilmsPage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/logout" element={<LogoutPage />} />
            <Route exact path="/error" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
