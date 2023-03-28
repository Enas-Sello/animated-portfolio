import React, { useState, useRef } from "react"
import SectionWrapper from "../../utils/SectionWrapper"
import emailjs from "@emailjs/browser"
import { slideIn } from "../../utils/motion"
import { motion } from "framer-motion"
import ContactCanvas from "../3D/ContactCanvas"
const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const handelChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        "service_swcmrnv",
        "template_5ztxakl",
        {
          from_name: form.name,
          to_name: "Enas Sello",
          from_email: form.email,
          to_email: "enas.awad169@gmail.com",
          message: form.message,
        },
        "PxO3uE03nWJklQ_Pi"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          // alert("thank you , i will contact you soon ")
          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          console.log(error)
          setSuccess(false)
        }
      )
  }
  // service_swcmrnv
  // template_5ztxakl
  // PxO3uE03nWJklQ_Pi
  return (
    <div className=" flex xl:flex-row flex-col gap-10 overflow-hidden  ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  hidden sm:block  p-8 rounded-2xl  "
      >
        <ContactCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0b011d91] p-8 rounded-2xl  "
      >
        <p className=" text-xl text-indigo-100 mt-2">Get in touch </p>
        <p className="text-4xl font-bold  ">contact .</p>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 text-white text-lg font-medium">
              Your name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="what's Your Name ?"
              className=" bg-indigo-900 py-2 px-3 lg:py-4 lg:px-6 placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 text-white text-lg font-medium">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="what's Your Email ?"
              className=" bg-indigo-900 py-2 px-3 lg:py-4 lg:px-6 placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 text-white text-lg font-medium">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="what do you what to say ?"
              className=" bg-indigo-900 py-4 px-6
            placeholder:text-gray-300 text-white rounded-lg outline-none
            border-none font-medium placeholder:text-center"
            />
          </label>
          <div className="flex items-center justify-end gap-3">
            <p>{success && "thank you , i will contact you soon"}</p>
            <button
              className="bg-indigo-900 py-3 px-10 outline-none w-fit text-white font-bold shadow-md shadow-black rounded-lg"
              type="submit"
            >
              {loading ? "sending ..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(ContactMe, "contactMe")
