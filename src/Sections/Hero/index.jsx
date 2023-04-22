import React from "react"

function Hero() {
  return (
    <section id="section_hero" className="w-full h-screen flex items-center">
      <div className="w-full lg:w-[36rem] bg-primary-green bg-opacity-30 backdrop-blur-md p-4 lg:ml-[18rem] overflow-hidden">
        <h1 className="font-display text-4xl md:text-7xl mb-2">Transforming Spaces,<br/> Creating Dreams</h1>
        <h2 className="md:text-2xl text-sm leading-relaxed">
          Emphasizing the agency's ability to turn ordinary spaces into extraordinary architectural masterpieces that fulfill the dreams of their clients.
        </h2>
      </div>
    </section>
  )
}

export default Hero
