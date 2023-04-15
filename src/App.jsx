import React from "react"
import ThreeDBackground from "./Sections/ThreeDBackground"
import * as Section from "./Sections"

function App() {
  return (
    <ThreeDBackground>
      <Section.Header />
      <Section.Hero />
      <Section.Services />
      <Section.Works />
      <Section.Contact />
      <Section.Footer />
    </ThreeDBackground>
  )
}

export default App
