import React from "react"

function Services() {
  return (
    <section id="section_services" className="w-full h-screen flex items-end">
      <div className="w-full bg-slate-200 p-2 flex text-lg text-center justify-around py-12 text-black">
        <div className="w-[20rem]">
          <h3 className="font-bold text-3xl">Elevate Your Spaces</h3>
          <p>
            Our architecture agency offers cutting-edge design and construction services to transform your spaces into functional and aesthetically pleasing
            environments.
          </p>
        </div>
        <div className="w-[20rem]">
          <h3 className="font-bold text-3xl">Designing Dreams into Reality</h3>
          <p>
            Our architecture agency specializes in bringing your dreams to life through bespoke architecture and interior design services. We work closely with
            clients to understand their vision and deliver personalized solutions.
          </p>
        </div>
        <div className="w-[20rem]">
          <h3 className="font-bold text-3xl">Building a Better Future</h3>
          <p>
            From energy-efficient buildings to eco-friendly materials, we strive to minimize environmental impact and promote sustainable living. Partner with
            us to build a greener world for generations to come.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
