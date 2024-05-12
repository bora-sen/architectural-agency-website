import React from "react"

function Works() {
  return (
    <section id="section_works" className="w-full flex items-center md:justify-end">
      <div className="w-full lg:bg-slate-200 lg:bg-opacity-40 lg:w-[25rem] h-full flex flex-col backdrop-blur-sm lg:mr-[12rem] text-center gap-12 items-center justify-center py-12 text-black px-4">
        <h5 className="font-bold text-xl lg:text-5xl mt-24">Our Works</h5>
        <a href="#">
          <div>
            <img className="aspect-video" src="https://galeriemagazine.com/wp-content/uploads/2022/01/Adjaye-Assocites-Abu-Dhabi-1920x1200.jpg" alt="" />
            <h6 className="md:text-4xl font-bold">Work 1</h6>
            <p className="text-xs md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.
            </p>
          </div>
        </a>
        <a href="#">
          <div>
            <img className="aspect-video" src="https://images.adsttc.com/media/images/5de9/3010/3312/fd9f/fd00/04a7/newsletter/Lv_Lin.jpg" alt="" />
            <h6 className="md:text-4xl font-bold">Work 2</h6>
            <p className="text-xs md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.
            </p>
          </div>
        </a>

        <a href="#">
          <div>
            <img className="aspect-video" src="https://worldlandscapearchitect.com/wp-content/uploads/2019/07/TH050619_Safdie_Jewel_0862-768x577.jpg" alt="" />
            <h6 className="md:text-4xl font-bold">Work 3</h6>
            <p className="text-xs md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Works
