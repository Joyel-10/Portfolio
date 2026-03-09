import React from 'react'

function Contact() {
  return (
    <>
      <section id='contact' data-aos='fade-up' data-aos-delay='400'>
        <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900'>Contact Me</h2>
          <form action="#" className='space-y-8'>
            <div>
              <label for='email' className='block mb-2 text-xl font-medium text-white'>Email</label>
              <input type="email" id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' required />

            </div>
            <div className='sm:col-span-2'>
              <label for='message' className='block mb-2 text-xl font-medium text-white'>Message</label>
              <textarea
                rows={"6"}
                id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' required />
            </div>


            <button className="inline-flex items-center text-white bg-orange-500 border-2 border-white py-3 px-8 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-orange-400 hover:border-yellow-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]">
             Send Message
            </button>

          </form>
        </div>
      </section>

    </>
  )
}

export default Contact