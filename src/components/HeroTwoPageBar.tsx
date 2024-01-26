import "../styles/herotwo.css";


type HeroTwoPageBarProps = {
  title: string;
};

const HeroTwoPageBar: React.FC<HeroTwoPageBarProps> = ({ title }) => {
  return <div className="heroTwoPageBar">{title}</div>;
};

export default HeroTwoPageBar;
