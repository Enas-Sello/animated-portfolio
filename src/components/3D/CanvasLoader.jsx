import { Html, useProgress } from "@react-three/drei"
import React from "react"

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <p className=" text-sm text-indigo-300 font-bold my-10 ">
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
