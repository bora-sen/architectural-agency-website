import React from "react"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
import roomModelFile from "./model.glb"

function RoomModel() {
  const scene = useLoader(GLTFLoader, roomModelFile)

  const roomModel = scene.scenes[0] ?? false

  if (!roomModel) return null
  else {
    return <primitive object={roomModel} />
  }
}

export default RoomModel
