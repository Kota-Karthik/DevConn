import "../styles/herotwo.css";
import HeroTwoPageBar from "../components/HeroTwoPageBar";
import { heroTwoPageText } from "../functions/constants";
const HeroTwo = () => {
  return (
    <div className="heroTwo">
      {heroTwoPageText.map((title, id) => {
        return <HeroTwoPageBar title={title} key={id} />;
      })}
    </div>
  );
};

export default HeroTwo;
