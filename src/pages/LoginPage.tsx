import TypeWriter from "../functions/TypeWriter";
import { loginTypeWriterText } from "../functions/constants";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-row bg-gray-900 select-text">
        <section>
          <div className="bg-gray-50">
            <div className="py-4 px-4 mx-auto max-w-[100%] lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h3 className="heading font-bold mb-4 text-5xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
                  Reconnect with DEVCONN:
                  <br />
                  <span className="text-4xl font-bold  mb-4 tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl ">
                    <TypeWriter array={loginTypeWriterText} />
                  </span>
                </h3>
                <p className="text mb-6 text-lg font-normal text-gray-700">
                  Your Hub for Resource Sharing, Hackathon Partnerships, Job
                  Postings, and Community Building in the World of Developers.
                </p>
              </div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl border-4 border-black">
                <div className="heading text-4xl font-bold text-gray-900  sm:w-[100%] space-y-6">
                  <h2>Login to DevConn</h2>
                </div>
                <form method="POST" className="mt-8 space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text block mb-2 text-lg font-medium text-medium  select-text"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john.doe@example.com"
                      autoComplete="off"
                      className="text bg-gray-50 border border-black text-gray-900 text-md rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2  select-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text block mb-2 text-lg font-medium text-medium select-text"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <input
                        type={"password"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        autoComplete="off"
                        className="text bg-gray-50 border border-black text-gray-900 text-md rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2  select-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="">
                    <Link
                      to="#"
                      className="text ml-auto text-sm font-medium  hover:underline"
                    >
                      Lost Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-semibold text-center text-black sm:w-[100%] lg:w-[100%]  transition duration-500 ease-in-out text tracking-wider border-2 border-black rounded-lg hover:bg-black hover:text-white"
                  >
                    Login into your Account
                  </button>
                  <div className="flex flex-row items-center">
                    <hr className="w-[48%] sm:w-[48%] md:w-[48%] lg:w-[48%]" />
                    <div className="m-1">
                      <h3 className="text-sm font-medium text-medium dark:text-white">
                        OR
                      </h3>
                    </div>
                    <hr className="w-[48%] sm:w-[48%] md:w-[48%] lg:w-[48%]" />
                  </div>
                  <button className="w-full">
                    <div className="flex flex-row justify-center items-center border border-gray-400 rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-700 transition ease-in-out duration-500">
                      <svg
                        width="1em"
                        height="1em"
                        className="m-2.5 cursor-pointer sm:w-2em sm:h-wem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.52 12.275c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z"
                          fill="#4285F4"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.997 24.001c3.24 0 5.956-1.074 7.942-2.907l-3.878-3.01c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.111-6.714-4.948h-4.01v3.11A11.995 11.995 0 0011.997 24z"
                          fill="#34A853"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.285 14.278a7.213 7.213 0 01-.376-2.28c0-.79.136-1.56.376-2.28V6.61H1.276A11.995 11.995 0 000 12c0 1.936.464 3.769 1.276 5.389l4.01-3.11z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.997 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.948 1.19 15.232 0 11.997 0 7.307 0 3.248 2.69 1.273 6.61l4.01 3.11c.943-2.836 3.589-4.947 6.714-4.947z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <h3 className="font-semibold text-lg cursor-pointer">
                        Continue with Google
                      </h3>
                    </div>
                  </button>

                  <div className="text-sm font-medium text-gray-900  m-1">
                    Not registered yet?
                    <NavLink
                      to="/signup"
                      className="text ml-auto text-sm font-medium hover:underline text-black"
                    >
                      {" "}
                      Create Account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
