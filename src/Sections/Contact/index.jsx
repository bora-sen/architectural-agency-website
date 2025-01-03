import React from "react"

function Contact() {
  return (
    <section id="section_contact" className="w-full h-screen">
      <div className="w-full lg:bg-slate-200 lg:bg-opacity-40 lg:w-[37rem] h-full backdrop-blur-sm lg:ml-[10rem] flex items-center justify-center text-black">
        <div className="">
          <h5 className="text-8xl font-display mb-12">Contact Us</h5>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark: text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm   bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500   dark:border-gray-600 dark:placeholder-gray-400 dark: text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm   bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500   dark:border-gray-600 dark:placeholder-gray-400 dark: text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center  text-white hover:text-black rounded-lg bg-gray-800 sm:w-fit hover:bg-gray-100 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
