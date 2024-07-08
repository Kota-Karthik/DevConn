import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { GithubIcon, GoogleIcon } from "../components/Icons";
import useNavigation from "../functions/useNavigation";
import LoginButtons from "../components/LoginButtons";

const SignupPage: React.FC = () => {
  const passwordsDontMatchError = "Passwords don't match!";
  const inputCantBeEmptyError = "Inputs can't be empty!";
  const NavigateTo = useNavigation();
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
  const [userDetails, setUserDetails] = useState(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  )

  const register = async () => {
    setLoading(true);
    const { name, email, password, confirmPassword } = userDetails;
    if (!name || !email || !password || !confirmPassword) {
      setLoading(false);
      throw new Error(inputCantBeEmptyError);
    }
    if (password != confirmPassword) {
      setLoading(false);
      throw new Error(passwordsDontMatchError);
    }
    try {
      const config={
        headers:{
          "Content-type":"application/json",
        },
      }
      const {data}=await axios.post("http://localhost:5000/user/register",{name,email,password},config);
      console.log("data: ",data);
      localStorage.setItem("userInfo",JSON.stringify(data));
      setLoading(false);
      // NavigateTo("/chats");
    } catch (err) {
      setLoading(false);
      throw new Error(JSON.stringify(err));
    }
  }
  return (
    <>
      <div className="bg-black min-w-full min-h-screen flex container">
        <div className="w-[30%]  bg-gradient-to-r from-[#171616] via-[#2b2a2a] to-[#171616] my-auto mx-auto rounded-xl p-10 text-white">
          <div className="text-[3rem] font-extrabold">Sign Up</div>
          <div className="text-[1.25rem] font-medium">
            Already have an account? <button onClick={NavigateTo("/auth/login")} className="hover:underline">Log In</button>
          </div>
          <div className="my-[2.5rem]">
            <LoginButtons text="Google" Icon={GoogleIcon} />
            <LoginButtons text="Github" Icon={GithubIcon} />
          </div>
          <div className="flex mb-[2rem]">
            <div className="w-[45%] h-[0.5px] border-[0.5px] my-[auto] opacity-[0.2] ">

            </div>
            <span className="mx-4">
              or
            </span>
            <div className="w-[45%] h-[0.5px] border-[0.5px] my-[auto] opacity-[0.2]">

            </div>
          </div>
          <div className="font-bold text-[1.25rem] ">Username</div>
          <input
            type="text"
            minLength={2}
            maxLength={50}
            className="w-full p-2 mb-4 rounded bg-transparent border-[1px]"
            onChange={(e) => { setUserDetails({ ...userDetails, name: e.target.value }) }}
            required={true} />
          <div className="font-bold text-[1.25rem] ">Email</div>
          <input
            type="email"
            maxLength={50}
            className="w-full p-2 mb-4 rounded bg-transparent border-[1px]"
            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
            required={true} />
          <div className="font-bold text-[1.25rem] ">Password</div>
          <input
            type="password"
            minLength={8}
            maxLength={100}
            className="w-full p-2 mb-4 rounded bg-transparent border-[1px]"
            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
            required={true} />
          <div className="font-bold text-[1.25rem] ">Confirm Password</div>
          <input
            type="password"
            minLength={8}
            maxLength={100}
            className="w-full p-2 mb-4 rounded bg-transparent border-[1px]"
            onChange={(e) => { setUserDetails({ ...userDetails, confirmPassword: e.target.value }) }}
            required={true} />
          <button
            className={`w-full p-2 bg-white text-black text-[1.25rem] font-bold py-2 px-4 rounded-lg border-[1px] border-black hover:border-white hover:bg-black hover:text-white rounded-lg flex items-center justify-center`}
            onClick={register}
            onMouseEnter={() => setColors(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'])}
            onMouseLeave={() => setColors(['#000000', '#000000', '#000000', '#000000', '#000000'])}
          >
            {loading ? (
              <ColorRing
                visible={true}
                height="35"
                width="35"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={colors}
              />
            ) : (
              "Sign up"
            )}
          </button>

          <div className="mt-4 text-[1rem] ">
            By continuing, you agree to our <a href="#" className="hover:underline hover:font-bold">Terms of Service</a> and <a href="#" className="hover:underline hover:font-bold">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
