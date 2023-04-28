import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"
import { GoMarkGithub } from "react-icons/go"
import { FaLink } from "react-icons/fa"
import { MdVideoCameraBack } from "react-icons/md"
import { Tilt } from "react-tilt"
const Card = ({ project, index }) => {
  return (
    <>
      <motion.div
        className="hidden md:block"
        variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="p-3 rounded-2xl  w-full bg-indigo-900 "
        >
          <div className=" relative w-full h-[260px] max-h-[260px]">
            <img
              src={project.img}
              alt="project"
              className=" rounded-2xl object-cover w-full h-64"
            />
            <div className=" absolute inset-0 flex justify-end m-3 gap-3">
              {project.code && (
                <div
                  onClick={() => window.open(project.code, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <GoMarkGithub className="w-6 h-6" />
                </div>
              )}
              {project.video && (
                <div
                  onClick={() => window.open(project.video, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <MdVideoCameraBack className="w-6 h-6" />
                </div>
              )}
              {project.demo && (
                <div
                  onClick={() => window.open(project.demo, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FaLink className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
          <div className=" mt-3 ">
            <h3 className="  text-2xl font-extrabold">{project.name}</h3>
            <p className="grid grid-cols-3 text-indigo-500 mt-2 w-full">
              {project.langs.map((lang, i) => (
                <span key={i}>{lang}</span>
              ))}
            </p>
          </div>
        </Tilt>
      </motion.div>
      {/* mobile */}
      <div className=" md:hidden ">
        <div className="p-3 rounded-2xl  w-full bg-indigo-900 ">
          <div className=" relative w-full h-[260px] max-h-[260px]">
            <img
              src={project.img}
              alt="project"
              className=" rounded-2xl object-cover w-full h-64"
            />
            <div className=" absolute inset-0 flex justify-end m-3 gap-3">
              {project.code && (
                <div
                  onClick={() => window.open(project.code, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <GoMarkGithub className="w-6 h-6" />
                </div>
              )}
              {project.video && (
                <div
                  onClick={() => window.open(project.video, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <MdVideoCameraBack className="w-6 h-6" />
                </div>
              )}
              {project.demo && (
                <div
                  onClick={() => window.open(project.demo, "_blank")}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FaLink className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
          <div className=" mt-3 ">
            <h3 className="  text-2xl font-extrabold">{project.name}</h3>
            <p className="grid grid-cols-3 text-indigo-500 mt-2 w-full">
              {project.langs.map((lang, i) => (
                <span key={i}>{lang}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
