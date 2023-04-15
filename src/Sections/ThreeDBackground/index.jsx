import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { RoomModel } from "./Components"

function ThreeDBackground({ children }) {
  return (
    <main className="w-full h-auto relative">
      <section id="section_background" className="w-full h-screen bg-white -z-10 fixed top-0">
        <Canvas camera={{ fov: 66 }}>
          <ambientLight intensity={1.2} />
          <RoomModel />
        </Canvas>
      </section>
      <section className="">{children}</section>
    </main>
  )
}

export default ThreeDBackground
