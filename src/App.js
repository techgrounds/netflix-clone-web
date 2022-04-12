import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./assets/scss/main.scss";

import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/genre"
              element={
                <>
                  <Navbar />
                  <GenrePage />
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <Navbar />
                  <SearchPage />
                </>
              }
            />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
