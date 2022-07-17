import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../data/logo.png';
const Header = () => {
  const navbar = {
    link1: 'home',
    link2: 'work',
    link3: 'about',
    link4: 'skills',
    link5: 'Contact',
  };

  const [nav, setNave] = useState(false);
  const clickHndler = () => {
    setNave(!nav);
  };
  return (
    <div className="fixed w-full">
      <nav className="w-full h-12 flex justify-between items-center px-4 capitalize ">
        <div className="n-left flex grow items-center gap-4">
          <div className="logo flex justify-center align-middle	font-bold text-4xl ml-4 ">
            {/* <img className="w-10 mr-1" src={logo} alt={logo} /> */}
            <h1 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Enas
            </h1>
          </div>
        </div>
        <div className="n-right hidden md:flex grow text-xl items-center justify-center font-semibold	 ">
          <div className="n-list grow-4 ">
            <ul className="hidden md:flex gap-4 mr-8 cursor-pointer 	">
              <li className="font-semibold ">
                <Link to="/" smooth={true} duration={500}>
                  {navbar.link1}
                </Link>
              </li>

              <li className="">
                <Link to="/Projects" smooth={true} duration={500}>
                  {navbar.link2}
                </Link>
              </li>

              <li className="">
                <Link to="/About" smooth={true} duration={500}>
                  {navbar.link3}
                </Link>
              </li>
              <li className="">
                <Link to="/Skills" smooth={true} duration={500}>
                  {navbar.link4}
                </Link>
              </li>
              <li className="">
                <Link to="/Contact" smooth={true} duration={500}>
                  {navbar.link5}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* hamburger menu */}
        <div className="md:hidden z-20 text-blue-500" onClick={clickHndler}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute z-10  bg-opacity-70 font-bold top-0 left-0 w-full  h-screen flex flex-col justify-center items-center cursor-pointer	'
          }
        >
          <li className=" py-6 text-4xl">
            <Link onClick={clickHndler} to="/" smooth={true} duration={500}>
              {navbar.link1}
            </Link>
          </li>
          <li className=" py-6 text-4xl">
            <Link
              onClick={clickHndler}
              to="/Projects"
              smooth={true}
              duration={500}
            >
              {navbar.link2}
            </Link>
          </li>
          <li className=" py-6 text-4xl ">
            <Link
              onClick={clickHndler}
              to="/About"
              smooth={true}
              duration={500}
            >
              {navbar.link3}
            </Link>
          </li>
          <li onClick={clickHndler} className=" py-6 text-4xl">
            <Link
              onClick={clickHndler}
              to="/skills"
              smooth={true}
              duration={500}
            >
              {navbar.link4}
            </Link>
          </li>
          {/* <li className=" py-6 text-4xl">{contact}</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
