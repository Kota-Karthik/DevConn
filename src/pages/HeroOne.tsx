import { useRef } from "react";
import useNavigation from "../functions/useNavigation";
import { FontChanger } from "../functions/fontChanger";
import { devConnDetails } from "../functions/constants";
import "../styles/heroPage.css";
import "../styles/customFont.css";

const HeroOne = () => {
  const NavigateTo = useNavigation();
  const changingFontDiv = useRef<HTMLDivElement>(null);

  FontChanger(changingFontDiv, 300);

  return (
    <section className="HeroSectionOne">
      <div className="HeroOne">
        <div ref={changingFontDiv} className="hero-heading">
          Connect Developers
        </div>
        <div className="hero-div-2">
          <div className="hero-buttons">
            <button
              className="SignUp-Button"
              onClick={NavigateTo("/auth/register")}
            >
              Join now!
            </button>
            <button
              className="Login-button"
              onClick={NavigateTo("/auth/login")}
            >
              Lets connect
            </button>
          </div>
          <div>
            <div className="hero-details-container">
              <ul>
                {devConnDetails.map((detail, id) => {
                  return <li key={id}>{detail}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
