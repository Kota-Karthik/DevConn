import { Route, Routes } from "react-router-dom";
import "./styles/heroPage.css";
import "./styles/customFont.css";
import HeroOne from "./pages/HeroOne";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroOne />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
