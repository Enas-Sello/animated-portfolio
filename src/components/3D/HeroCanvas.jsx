import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import ChristmasBall from "./ChristmasBall"
import CanvasLoader from "./CanvasLoader"
const HeroCanvas = () => {
  return (
    <div className=" w-full h-screen">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Stage environment="forest" intensity={1}>
            <ChristmasBall />
          </Stage>
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroCanvas
