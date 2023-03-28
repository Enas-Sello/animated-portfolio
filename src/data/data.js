import HTML from "../components/assets/html.png"
import CSS from "../components/assets/css.png"
import JavaScript from "../components/assets/javascript.png"
import ReactImg from "../components/assets/react2.png"
import redux from "../components/assets/redux.png"
import Tailwind from "../components/assets/tailwind.png"
import figma from "../components/assets/figma.png"
import typeScript from "../components/assets/typescript.png"
import threeJs from "../components/assets/threejs.svg"
import git from "../components/assets/git.png"
// work
import portfolio from "../components/assets/item1.png"
import Amazon from "../components/assets/item2.png"
import admin from "../components/assets/admin.png"
import netflex from "../components/assets/item3.png"
import shareme from "../components/assets/shareme.png"
import game from "../components/assets/sello-templet.png"

//
export const heroSection = {
  name: "Enas Awad",
  jobTitle: "Front end Web Developer",
  stack: "MERN Stack",
  // UI: 'UI/UX Designer',
}
export const technologies = [
  {
    id: 1,
    img: HTML,
    title: "html",
  },
  {
    id: 2,
    img: CSS,
    title: "CSS",
  },
  {
    id: 3,
    img: JavaScript,
    title: "JavaScript",
  },
  {
    id: 4,
    img: ReactImg,
    title: "React",
  },
  {
    id: 5,
    img: redux,
    title: "redux",
  },
  {
    id: 6,
    img: figma,
    title: "figma",
  },
  {
    id: 7,
    img: threeJs,
    title: "threeJs",
  },
  {
    id: 8,
    img: typeScript,
    title: "typeScript",
  },
  {
    id: 9,
    img: Tailwind,
    title: "Tailwind",
  },
  {
    id: 10,
    img: git,
    title: "git",
  },
]
export const work = [
  {
    name: "Portfolio",
    code: "https://github.com/Enas-Sello/animated-portfolio",
    img: `${portfolio}`,
    langs: ["React", "taillwind"],
  },
  {
    name: "Netflex clone",
    code: "https://github.com/Enas-Sello/Netflix_clone",
    img: `${netflex}`,
    langs: ["React", "taillwind", "firebase"],
  },

  {
    name: "gameing landing page",
    demo: "https://enas-sello.github.io/sello-template/",
    code: "https://github.com/Enas-Sello/landing",
    img: `${game}`,
    langs: ["HTML", "CSS", "javaScript"],
  },
  {
    name: "Share Me App",
    demo: "https://shareme-sello.netlify.app/",
    code: "https://github.com/Enas-Sello/Social-media-sharing-App",
    img: `${shareme}`,
    langs: ["React", "taillwind", "santiy"],
  },
  {
    name: "Amazon clone",
    demo: "https://amazon-clone-front-end-five.vercel.app/",
    code: "https://github.com/Enas-Sello/Amazon-Clone-FrontEnd",
    img: `${Amazon}`,
    langs: [
      "React",
      "bootstrap",
      "Redux tollkit",
      "node",
      "express",
      "mongodb",
    ],
  },
  {
    name: "Admin dashbord",
    code: "https://github.com/Enas-Sello/Amazon-Clone-FrontEnd",
    img: `${admin}`,
    langs: [
      "React",
      "bootstrap",
      "Redux tollkit",
      "node",
      "express",
      "mongodb",
    ],
  },
]
