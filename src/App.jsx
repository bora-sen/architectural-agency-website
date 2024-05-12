import React from "react"
import * as Section from "./Sections"

function App() {
  return (
    <Section.ThreeDBackground>
      <Section.Header />
      <Section.Hero />
      <Section.Services />
      <Section.Works />
      <Section.Contact />
      <Section.Footer />
    </Section.ThreeDBackground>
  )
}

export default App
