import React from "react"
import { technologies } from "../../data/data"
import { fadeIn } from "../../utils/motion"
import BallCanvas from "../3D/BallCanvas"
import { motion } from "framer-motion"

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-8   ">
      {technologies.map((techno, index) => (
        <motion.div
          variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
          key={techno.id}
          className="w-32 h-32 "
        >
          <BallCanvas icon={techno.img} />
        </motion.div>
      ))}
    </div>
  )
}

export default Tech
