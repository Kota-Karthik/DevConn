import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`h-24 border-4 border-black m-1 backdrop-blur-md p-4 flex items-center justify-between rounded-lg`}
    >
      <div className="container flex items-center justify-between">
        <h1 className="uppercase text-[3rem] font-bold text-black heading">
          <Link to={`/`}>DEVCONN</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <Link to={"/"} className="text-[1.5vw] text">
            Home
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
