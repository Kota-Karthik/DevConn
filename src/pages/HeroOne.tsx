import { useEffect, useRef, useState } from "react";
import useNavigation from "../functions/useNavigation";
import { motion } from "framer-motion";
import { FontChanger } from "../functions/fontChanger";
// import { devConnDetails } from "../functions/constants";
import { ConstantState } from "../constants/ConstantProvider";
import "../styles/heroPage.css";
import "../styles/customFont.css";


const HeroOne = () => {
  const NavigateTo = useNavigation();

  const [mousePosition,setMousePosition]=useState({x:0,y:0});
  const [cursorVariant,setCursorVariant]=useState("default");
  useEffect(()=>{
    const mouseMove=(e: { clientX: any; clientY: any; })=>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener("mousemove",mouseMove);
    return ()=>{
      window.removeEventListener("mousemove",mouseMove);
    }
  },[])
  const variants={
    default:{
      x:mousePosition.x-16,
      y:mousePosition.y-16,
    },
    text:{
      height:150,
      width:150,
      x:mousePosition.x-75,
      y:mousePosition.y-75,
      backgroundColor:"#FFFFFF",
      mixBlendMode:"difference",
      
    }
  }

  const textEnter=()=>{
    setCursorVariant("text");
  }

  const textLeave=()=>{
    setCursorVariant("default");
  }

  
  const changingFontDiv = useRef<HTMLDivElement>(null);
  const {devConnDetails}=ConstantState();
  FontChanger(changingFontDiv, 300);

  return (
    <section className="HeroSectionOne">
      <div className="HeroOne">
        <div ref={changingFontDiv} className="hero-heading" onMouseEnter={textEnter} onMouseLeave={textLeave}>
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
              <ul onMouseEnter={textEnter} onMouseLeave={textLeave}>
                {devConnDetails.map((detail, id) => {
                  return <li key={id}>{detail}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <motion.div 
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      />
    </section>
  );
};

export default HeroOne;
