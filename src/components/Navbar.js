import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const MotionLink = motion(Link);
  const NavbarVariants = {
    initial:{},
    animate:{BorderBottom:"1px solid white"},
  }

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* <ReorderIcon />add antd menu icon */}
        </button>
      </div>
      <div className="links">
        <MotionLink to="#" variants={NavbarVariants} whileHover="animate"> JMB </MotionLink>
        <MotionLink to="/"> Home </MotionLink>
        <MotionLink to="/projects"> Projects </MotionLink>
        <MotionLink to="/experience"> Experience </MotionLink>
      </div>
    </div>
  );
}

export default Navbar;
