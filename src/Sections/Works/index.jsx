import React from "react"

function Works() {
  return (
    <section id="section_works" className="w-full flex justify-end">
      <div className="w-[25rem] h-full flex flex-col bg-slate-200 mr-[12rem] text-center gap-12 items-center justify-center py-12 text-black px-4">
        <h5 className="font-bold text-5xl mt-24">Our Works</h5>
        <a href="#">
          <div>
            <img className="aspect-video" src="https://galeriemagazine.com/wp-content/uploads/2022/01/Adjaye-Assocites-Abu-Dhabi-1920x1200.jpg" alt="" />
            <h6 className="text-4xl font-bold">Work 1</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.</p>
          </div>
        </a>
        <a href="#">
          <div>
            <img className="aspect-video" src="https://images.adsttc.com/media/images/5de9/3010/3312/fd9f/fd00/04a7/newsletter/Lv_Lin.jpg?1575563274" alt="" />
            <h6 className="text-4xl font-bold">Work 2</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.</p>
          </div>
        </a>

        <a href="#">
          <div>
            <img className="aspect-video" src="https://hommes.studio/wp-content/uploads/10-Best-Modern-Architecture-Projects-That-You-Need-To-Know-14.jpg" alt="" />
            <h6 className="text-4xl font-bold">Work 3</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio et autem incidunt officiis harum ipsam consequatur rerum.</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Works
