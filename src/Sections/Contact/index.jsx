import React from "react"

function Contact() {
  return (
    <section id="section_contact" className="w-full h-screen">
      <div className="w-[37rem] h-full bg-slate-200 ml-[10rem] flex items-center justify-center text-black">
        <div className="">
          <h5 className="text-8xl font-display">Contact Us</h5>
          <form>
            <div className="grid">
              <label htmlFor="input_name">Name Surname</label>
              <input type="text" name="" id="input_name" />
            </div>
            <div className="grid">
              <label htmlFor="input_name">Email</label>
              <input type="email" name="" id="input_name" />
            </div>
            <div className="grid">
              <label htmlFor="input_name">Content</label>
              <textarea type="" name="" id="input_name" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
