import React from "react"
import { technologies } from "../../data/data"
import { fadeIn } from "../../utils/motion"
import BallCanvas from "../../components/3D/BallCanvas"
import { motion } from "framer-motion"

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-8   ">
      {technologies.map((techno, index) => (
        <>
          <motion.div
            variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
            key={techno.id}
            className="w-32 h-32 hidden lg:block"
          >
            <BallCanvas icon={techno.img} />
          </motion.div>
          <div
            key={techno.id}
            className="lg:hidden shadow-inner shadow-white rounded-md hover:scale-110 duration-500 "
          >
            <img
              className="w-20 mt-2 mx-auto "
              src={techno.img}
              alt={techno.title}
            />
            <p className="my-4 text-center">{techno.title}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default Tech
