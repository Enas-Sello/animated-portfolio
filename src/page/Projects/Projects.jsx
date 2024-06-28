import React from "react"
import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import { work } from "../../data/data"
import SectionWrapper from "../../utils/SectionWrapper"
import Card from "../../components/Card"

const Projects = () => {
  return (
    <div className="w-full  text-white capitalize">
      <div className="  mx-auto p-4 flex flex-col gap-8 w-full h-full">
        {" "}
        <motion.div variants={textVariant(0.1)}>
          <p className="text-4xl font-bold inline border-b-4 border-indigo-400 ">
            Projects
          </p>
          {/* <p className=" text-xl text-indigo-100 mt-2">My work </p> */}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 ">
          {work.map((project, i) => (
            <Card project={project} index={i} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Projects, "projects")
