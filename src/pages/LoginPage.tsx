import React from "react";
import { GithubIcon, GoogleIcon } from "../components/Icons";
import useNavigation from "../functions/useNavigation";
import LoginButtons from "../components/LoginButtons";

const Login: React.FC = () => {
  const NavigateTo = useNavigation();
  return (
    <>
      <div className="bg-black w-full h-[100vh] flex">
        <div className="w-[30%]  bg-gradient-to-r from-[#171616] via-[#2b2a2a] to-[#171616] my-auto mx-auto rounded-xl p-10 text-white">
          <div className="text-[3rem] font-extrabold">Log In</div>
          <div className="text-[1.25rem] font-medium">
            Don't have an account? <button onClick={NavigateTo("/auth/register")} className="hover:underline">Sign Up</button>
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
          <div className="font-bold text-[1.25rem] ">Email</div>
          <input type="text" className="w-full p-2 mb-4 rounded bg-transparent border-[1px]" />
          <div className="font-bold text-[1.25rem] ">Password</div>
          <input type="password" className="w-full p-2 mb-4 rounded bg-transparent border-[1px]" />
          <button className="w-full p-2 bg-white text-black text-[1.25rem]   font-bold py-2 px-4 rounded border-[1px] border-black hover:border-white hover:bg-black hover:text-white rounded-lg">Log In</button>
          <div className="mt-4 text-[1rem] ">
            By continuing, you agree to our <a href="#" className="hover:underline hover:font-bold">Terms of Service</a> and <a href="#" className="hover:underline hover:font-bold">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
