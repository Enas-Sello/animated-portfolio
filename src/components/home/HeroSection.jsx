import SectionWrapper from "../../utils/SectionWrapper"
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"
import { slideIn, textVariant } from "../../utils/motion"
import { motion } from "framer-motion"
import HeroCanvas from "../3D/HeroCanvas"
import { heroSection } from "../../data/data"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
import { HiArrowNarrowRight } from "react-icons/hi"

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-5">
      <div className=" col-span-2 md:col-span-2">
        <motion.div
          variants={textVariant(0.1)}
          className="intro flex flex-col justify-center items-center h-screen capitalize gap-8 mx-auto px-8 lg:justify-center lg:items-center"
        >
          <p className="font-bold text-2xl sm:text-4xl ">hi I'M </p>
          <h1 className="text-indigo-800 font-bold text-4xl lg:text-6xl xl:text-8xl text-center">
            {heroSection.name}
          </h1>

          <h3 className=" text-xl md:text-4xl w-full text-center">
            <Typewriter
              className=""
              options={{
                strings: [`${heroSection.jobTitle}`, ``],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          {/* <p className=" py max-w-[700px]">{intro.stack}</p> */}
          <button className="group text-lg md:text-xl border-2 px-5 py-2 my-2 flex items-center rounded-2xl font-bold capitalize hover:border-indigo-400 ">
            <Link to="projects" smooth={true} duration={500}>
              view work
            </Link>
            <span className=" group-hover:rotate-90 decoration-1000 group-hover:text-indigo-400">
              <HiArrowNarrowRight className="ml-2 " />
            </span>
          </button>
          <div className=" m-3  flex gap-3 items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer ">
              <AiFillGithub
                onClick={() =>
                  window.open("https://github.com/Enas-Sello", "_blank")
                }
                className="w-6 h-6 hover:w-9 hover:h-9 "
              />
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer">
              <AiOutlineLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/enas-sellow-36153219a/",
                    "_blank"
                  )
                }
                className="w-6 h-6 hover:w-9 hover:h-9 "
              />{" "}
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" hidden sm:block sm:col-span-2 md:col-span-3">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" my-8 rounded-2xl  "
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(HeroSection, "heroSection")
