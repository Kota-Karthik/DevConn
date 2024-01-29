import "../styles/herotwo.css";
import HeroTwoPageBar from "../components/HeroTwoPageBar";
import { ConstantState } from "../constants/ConstantProvider";
const HeroTwo = () => {
  const {heroTwoPageText}=ConstantState();
  return (
    <div className="heroTwo mb-1 p-2">
      {heroTwoPageText.map((title, id) => {
        return <HeroTwoPageBar title={title} key={id} />;
      })}
    </div>
  );
};

export default HeroTwo;
  