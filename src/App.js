import Navbar from "./components/Navbar/Navbar";
import './assets/scss/main.scss';
import LandingHero from './components/LandingHero/LandingHero';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingHero />
    </div>
  );
}

export default App;
