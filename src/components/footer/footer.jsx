import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { PrfileLinks } from "../home/HeroSection";
function Footer() {
  return (
    <div name="footer" className="w-full  text-whte justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <AiFillGithub
            onClick={() => window.open(PrfileLinks.Github, "_blank")}
          />
        </li>

        <li>
          <AiOutlineLinkedin
            onClick={() => window.open(PrfileLinks.Linkedin, "_blank")}
          />
        </li>
        <p className="text-lg mt-1 ">Made My Enas Sello</p>
      </ul>
    </div>
  );
}

export default Footer;
