import React from "react"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
function Footer() {
  return (
    <div name="footer" className="w-full  text-whte justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <AiFillGithub
            onClick={() =>
              window.open("https://github.com/Enas-Sello", "_blank")
            }
          />
        </li>

        <li>
          <AiOutlineLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/enas-sellow-36153219a/",
                "_blank"
              )
            }
          />
        </li>
        <p className="text-lg mt-1 ">Made My Enas Sello</p>
      </ul>
    </div>
  )
}

export default Footer
