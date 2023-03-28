import React from "react"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div name="home" className="flex flex-col w-full ">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Home
