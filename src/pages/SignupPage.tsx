import "../styles/signupPage.css";
import TypeWriter from "../functions/typeWriter";
import { signupTypeWriterText } from "../functions/constants";
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
        <div className="signupHead">Lets connect!</div>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" placeholder="name"/>
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" placeholder="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" placeholder="password" />
        <label htmlFor="Confirm_Password">Confirm Password</label>
        <input type="text" id="Confirm_Password" placeholder="confirm password"/>
        <button type="submit" className="signupSubmitButton">Register</button>
        <div >Already have an account? <a href="#" className="alreadyHaveAccText">Login</a> </div>
    </div>
   </section>
  );
};

export default SignupPage;
