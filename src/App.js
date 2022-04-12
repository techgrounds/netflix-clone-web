import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/scss/main.scss";

import { LangProvider } from "./redux/languages/languages.context";
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
      <LangProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/genre" element={<GenrePage />} />
              <Route exact path="/search" element={<SearchPage />} />
              <Route exact path="/signin" element={<SignInPage />} />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </LangProvider>
    </div>
  );
}

export default App;
