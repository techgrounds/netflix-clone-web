import LandingHero from './../components/LandingHero/LandingHero';
import Navbar from '../components/Navbar/Navbar';
import FooterLandingPage from '../components/FooterLandingPage/FooterLandingPage';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <LandingHero />
      <FooterLandingPage />
    </div>
  );
};

export default LandingPage;
