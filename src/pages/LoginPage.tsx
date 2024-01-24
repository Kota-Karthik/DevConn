import "../styles/loginPage.css";
import { Link } from "react-router-dom";
import TypeWriter from "../functions/TypeWriter";
import { loginTypeWriterText } from "../functions/constants";
const LoginPage = () => {
  return (
    <section className="loginPageSection">
      <div className="LoginPageTagLineContainer">
        <div className="devConnLoginHead">DevConn</div>
        <div className="loginTypeWriterText">
          
          <TypeWriter array={loginTypeWriterText} />
        </div>

        <p className="LoginTaglineText">
          Your Hub for Resource Sharing, Hackathon Partnerships, Job Postings,
          and Community Building in the World of Developers.
        </p>
      </div>

      <div className="loginInputsDiv">
        <h1 className="loginHead">Login</h1>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" id="password" />
        <button type="submit" className="loginSubmitButton">
          Login
        </button>
        <div className="notRegisteredYetText">
          Not registered yet? <Link to="/signup">Join us!</Link>
        </div>
        <Link to="#" className="forgotPasswordText">
          Forget Password?
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
