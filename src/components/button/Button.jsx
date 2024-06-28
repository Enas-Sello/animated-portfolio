import React from "react"
import pdf from "../assets/enas awad.pdf"

const Button = () => {
  return (
    <>
      <a
        className="border-2 px-3 py-2 mt-4 font-bold text-lg rounded-2xl hover:text-white hover:border-indigo-400  whitespace-nowrap"
        href={pdf}
        download
      >
        My Reasum
      </a>
    </>
  )
}

export default Button
