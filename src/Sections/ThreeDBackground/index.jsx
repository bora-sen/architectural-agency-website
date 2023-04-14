import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { RoomModel } from "./Components"

function ThreeDBackground({ children }) {
  return (
    <main className="w-full h-auto relative">
      <section className="w-full h-screen bg-gray-300 -z-10 fixed top-0">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <RoomModel />
          </Suspense>
        </Canvas>
      </section>
      <section className="">{children}</section>
    </main>
  )
}

export default ThreeDBackground
