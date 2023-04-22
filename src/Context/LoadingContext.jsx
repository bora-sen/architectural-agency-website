import { createContext, useState } from "react"
import Loading from "../Sections/Loading"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import modelFile from "../Sections/ThreeDBackground/Components/RoomModel/model.glb"

export const LoadingContext = createContext()

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  const [roomModel, setRoomModel] = useState(false)

  if (isLoading) {
    const loader = new GLTFLoader()
    loader.load(
      modelFile,
      (gltf) => {
        setRoomModel(gltf.scenes[0])
        setIsLoading(false)
      },
      (progress) => {
        //console.log(progress)
        if (progress < 100) {
          setIsLoading(true)
        }
      }
    )
  }

  if (isLoading) {
    return <Loading />
  } else if (!isLoading) {
    const data = { roomModel }
    return <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  }
}
