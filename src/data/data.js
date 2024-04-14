import HTML from "../components/assets/html.png"
import CSS from "../components/assets/css.png"
import JavaScript from "../components/assets/javascript.png"
import ReactImg from "../components/assets/react2.png"
import redux from "../components/assets/redux.png"
import Tailwind from "../components/assets/tailwind.png"
import next from "../components/assets/nextjs.png"
import typeScript from "../components/assets/typescript.png"
import threeJs from "../components/assets/threejs.svg"
import git from "../components/assets/git.png"
import query from "../components/assets/reactquery.png"
import node from "../components/assets/node.png"
import mongo from "../components/assets/mongo.png"
// work
import portfolio from "../components/assets/item1.png"
import Amazon from "../components/assets/item2.png"
import admin from "../components/assets/admin.png"
import netflix from "../components/assets/item3.png"
import shareme from "../components/assets/shareme.png"
import game from "../components/assets/sello-templet.png"
import Elmarma from "../components/assets/almarma(2).png"
import eveently from "../components/assets/eveently.png"

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
    img: next,
    title: "Next js",
  },
  {
    id: 5,
    img: redux,
    title: "redux",
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
  {
    id: 11,
    img: query,
    title: "React query",
  },
  {
    id: 12,
    img: node,
    title: " Node js",
  },
  {
    id: 6,
    img: mongo,
    title: "Mongo db",
  },
]
export const work = [
  {
    name: "Portfolio",
    code: "https://github.com/Enas-Sello/portfolio",
    demo: "https://enas-sello.github.io/portfolio/",
    img: `${portfolio}`,
    langs: ["React", "taillwind", "AOS"],
  },
  {
    name: "Evently",
    code: "https://github.com/Enas-Sello/Event_next_app",
    demo: "https://event-next-bocgl00f1-enas-sello.vercel.app/",
    img: `${eveently}`,
    langs: [
      "Next Js",
      "React hookform",
      "taillwind",
      "typescript",
      "next auth",
      "uploadthing",
      "bcryptjs",
      " mongo db",
    ],
  },

  // {
  //   name: "Elmarma",
  //   demo: "https://elfinaly.com/",
  //   img: `${Elmarma}`,
  //   langs: ["React", "bootstrap", "react Query"],
  // },

  {
    name: "Netflex clone",
    code: "https://github.com/Enas-Sello/Netflix_clone",
    img: `${netflix}`,
    langs: ["React", "taillwind", "firebase"],
    video:
      "https://drive.google.com/file/d/1_lnSsloHJP9j_cSsvL62jvkG9uuBRCXa/view",
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
    demo: "https://amazon-clone-g4ct8ssx8-enassellos-projects.vercel.app/",
    code: "https://github.com/Enas-Sello/amazon-clone",
    img: `${Amazon}`,
    langs: [
      "React",
      "bootstrap",
      "Redux tollkit",
      "node",
      "express",
      "mongodb",
    ],
    video:
      "https://drive.google.com/file/d/16IQ27xriyxCDpC6ywaq3sE328PZNOpg2/view",
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
    video:
      "https://drive.google.com/file/d/16IQ27xriyxCDpC6ywaq3sE328PZNOpg2/view",
  },
]
