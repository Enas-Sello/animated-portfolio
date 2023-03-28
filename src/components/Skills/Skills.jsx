import React from "react"
import SectionWrapper from "../../utils/SectionWrapper"
import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import Tech from "./Tech"

const Skills = () => {
  return (
    <div className="w-full  text-white snap-center">
      <div className="  mx-auto p-4 flex flex-col gap-8 w-full h-full">
        <motion.div variants={textVariant(0.1)}>
          <p className="text-4xl font-bold inline border-b-4 border-indigo-400 text-start">
            Technologies
          </p>
          {/* <p className="text-xl text-indigo-100 mt-2">
            {" "}
            These are the technologies I've worked with
          </p> */}
        </motion.div>

        <Tech />
      </div>
    </div>
  )
}

export default SectionWrapper(Skills, "skills")
