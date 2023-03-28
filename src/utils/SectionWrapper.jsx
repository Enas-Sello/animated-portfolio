import React from "react"
import { motion } from "framer-motion"
import { staggerContainer } from "./motion"

const SectionWrapper = (Component, id) =>
  function Hoc() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className="max-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10"
      >
        <span className="hash-span " id={id}></span>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
