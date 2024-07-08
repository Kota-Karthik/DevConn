import { Route, Routes } from "react-router-dom";
import "./styles/customFont.css";
import Hero from "./pages/Hero";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<SignupPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

//  color:- #4edcd8