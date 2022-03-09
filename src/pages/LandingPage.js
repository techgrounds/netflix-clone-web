import { IconDetail } from "../components/Icons/IconDetail";
import { NetflixLogo } from "../components/Logos/NetflixLogo";
import { IconArrowLeft } from "../components/Icons/IconArrowLeft";
import { IconArrowDown } from "../components/Icons/IconArrowDown";
import { IconNotification } from '../components/Icons/IconNotification';
import { ButtonRoundDark } from "../components/ButtonRound/ButtonRound";
const LandingPage = () => {
  return (
    <>
      <div>Landing Page</div>
      <IconDetail />
      <ButtonRoundDark>
        <IconArrowLeft />
      </ButtonRoundDark>
      <ButtonRoundDark>
        <IconArrowDown />
      </ButtonRoundDark>
      <ButtonRoundDark>
        <IconNotification />
      </ButtonRoundDark>
      <NetflixLogo />
    </>
  );
};

export default LandingPage;
