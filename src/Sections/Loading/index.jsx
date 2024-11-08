import React from "react"
import s from "./loading.module.css"

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className={s.loader}></div>
    </div>
  )
}

export default Loading
