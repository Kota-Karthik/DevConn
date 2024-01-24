import "../styles/loginPage.css";
import TypeWriter from "../functions/typeWriter";
import { loginTypeWriterText } from "../functions/constants";
const LoginPage = () => {
  return (
    <section className="loginPageSection">
      <div className="LoginPageTagLineContainer">
        <div className="devConnLoginHead">DevConn</div>
        <div className="loginTypeWriterText"> <TypeWriter array={loginTypeWriterText}/>  </div>
        
        <p className="LoginTaglineText">
          Your Gateway to Resource Sharing, Ratings, Hackathon Partnerships, Job
          Postings, Referral Programs, Community Building, and Bug Squashing!
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
        <div className="notRegisteredYetText">Not registered yet? <a href="#">Join us!</a></div>
        <a href="#" className="forgotPasswordText">Forget Password?</a>
      </div>
    </section>
  );
};

export default LoginPage;
