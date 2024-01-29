import React, { ChangeEvent, FormEvent } from "react";
import ConnectWithGoogle from "../components/ConnectWithGoogle";
import TypeWriter from "../functions/TypeWriter";
import { loginTypeWriterText } from "../functions/constants";
import { Link, NavLink } from "react-router-dom";

type LoginFormProps = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = React.useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState<string | null>("");
  const [success, setSucess] = React.useState<string | null>("");
  const [isPending, startTransition] = React.useTransition();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

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
                <div className="heading text-4xl font-bold text-gray-900  sm:w-[100%] space-y-5">
                  <h2>Login to DevConn</h2>
                </div>
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4"
                >
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                        value={formData.password}
                        onChange={handleInputChange}
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
                </form>
                <ConnectWithGoogle />
                <NavLink
                  to="/auth/register"
                  className="mt-5 text text-center ml-auto text-sm font-medium hover:underline text-black"
                >
                  <div className="text-sm font-medium text-black  m-1">
                    Create an account?
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
