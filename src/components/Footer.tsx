import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FooterItems } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="pt-8 pb-6 border-4 border-black rounded-lg m-1"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700 heading">
              Let's Code Together!
            </h4>
            <h5 className="text text-lg mt-0 mb-2 text-blueGray-600">
              Connect with us on these platforms; we're here to help you with
              your coding journey!
            </h5>
            <div className="flex mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-black"
                type="button"
              >
                <BsTwitterX className="w-5 h-5 text-black hover:bg-black hover:text-white" />
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-black"
                type="button"
              >
                <FaGithub className="w-6 h-6 text-black hover:bg-black hover:text-white" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase heading text-sm font-bold mb-2 underline">
                  Useful Links
                </span>
                <ul className="list-unstyled text tracking-wide">
                  {FooterItems.map((link) => {
                    return (
                      <li key={link.name}>
                        <Link
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold hover:opacity-80 block pb-2 text-sm"
                          to={link.path}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-2 border-black rounded-lg text" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              ©{" "}
              <span id="get-current-year" className="text">
                {new Date().getFullYear()}
              </span>
              <Link to="/" target="_blank" className="text">
                {" "}
                Devconn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
