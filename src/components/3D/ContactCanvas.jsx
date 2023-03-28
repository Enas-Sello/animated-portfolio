import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"
import Jack from "./Jack"

const ContactCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
        />
        <Stage environment="night" intensity={1}>
          <Jack />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default ContactCanvas
