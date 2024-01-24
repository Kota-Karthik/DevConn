import { Link } from "react-router-dom";
import TypeWriter from "../functions/TypeWriter";
import { signupTypeWriterText } from "../functions/constants";
import "../styles/signupPage.css";
const SignupPage = () => {
  return (
   <section className="signupPageSection">
    <div className="SignupPageTagLineContainer">
        <div className="devConnSignupHead">DevConn</div>
        <div className="signupTypeWriterText"> <TypeWriter array={signupTypeWriterText}/>  </div>
        
        <p className="signupTaglineText">
          Your Gateway to Resource Sharing, Ratings, Hackathon Partnerships, Job
          Postings, Referral Programs, Community Building, and Bug Squashing!
        </p>
      </div>
    <div className="signupInputsDiv">
        <div className="signupHead">Sign up</div>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" placeholder="name"/>
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" placeholder="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" placeholder="password" />
        <label htmlFor="Confirm_Password">Confirm Password</label>
        <input type="text" id="Confirm_Password" placeholder="confirm password"/>
        <button type="submit" className="signupSubmitButton">Register</button>
        <div >Already have an account? <Link to="/login" className="alreadyHaveAccText">Login</Link> </div>
    </div>
   </section>
  );
};

export default SignupPage;
