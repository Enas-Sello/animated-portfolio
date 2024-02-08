import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../button/Button";
import { PrfileLinks } from "./HeroSection";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const navbar = {
    link1: "home",
    link2: "work",
    link3: "skills",
    link4: "About",
    link5: "contactMe",
  };

  const [nav, setNave] = useState(false);
  const clickHandler = () => {
    setNave(!nav);
  };
  return (
    <div className="fixed w-full z-50 p-4 bg-[#0b011d91]">
      <nav
        className="
            w-full flex justify-between items-center px-4 text-white capitalize  "
      >
        <div className="n-left flex grow items-center gap-4">
          <div
            data-aos="zoom-in-right"
            className="logo font-bold text-4xl ml-4 "
          >
            <h1 className="neonText">sello</h1>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="n-right hidden md:flex grow text-xl items-center justify-center font-semibold	 "
        >
          <div className="n-list grow-4 ">
            <ul className="hidden md:flex gap-4 mr-8 cursor-pointer	">
              <li className="">
                <Link to="heroSection" smooth={true} duration={500}>
                  {navbar.link1}
                </Link>
              </li>
              <li className="">
                <Link to="projects" smooth={true} duration={500}>
                  {navbar.link2}
                </Link>
              </li>
              <li className="">
                <Link to="skills" smooth={true} duration={500}>
                  {navbar.link3}
                </Link>
              </li>
              <li>
                <Link to="contactMe" smooth={true} duration={500}>
                  {navbar.link5}
                </Link>
              </li>
              <li className="">
                <Button />
              </li>
            </ul>
          </div>
          {/* <button className='Resume drop-shadow-lg'>Resume</button> */}
        </div>
        {/* hamburger menu */}
        <div className="md:hidden z-20" onClick={clickHandler}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-10 bg-[#18003ebf] bg-opacity-70 font-bold top-0 left-0 w-full  h-screen flex flex-col justify-center items-center cursor-pointer	"
          }
        >
          <li className=" py-6 text-4xl">
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              {navbar.link1}
            </Link>
          </li>
          <li className=" py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="Projects"
              smooth={true}
              duration={500}
            >
              {navbar.link2}
            </Link>
          </li>
          <li className=" py-6 text-4xl ">
            <Link
              onClick={clickHandler}
              to="skills"
              smooth={true}
              duration={500}
            >
              {navbar.link3}
            </Link>
          </li>
          <li className=" py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="contactMe"
              smooth={true}
              duration={500}
            >
              {navbar.link5}
            </Link>
          </li>

          <div className="flex gap-3 items-center justify-center">
            <li>
              <AiFillGithub
                onClick={() => window.open(PrfileLinks.Github, "_blank")}
                className="w-6 h-6"
              />
            </li>
            <li>
              <AiOutlineLinkedin
                onClick={() => window.open(PrfileLinks.Linkedin, "_blank")}
                className="w-6 h-6"
              />
            </li>
          </div>

          <Button />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
