import React from 'react'

function Hero() {
    return (
        <>
            <section data-aos='fade-up' data-aos-delay='450' className="text-white body-font bg-black">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    {/* Left side - Text */}
                    <div data-aos='fade-up' data-aos-delay='900' className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
                            Hi! I'm <span className="text-yellow-300">JOYEL</span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-300">
                            A passionate developer who loves building modern web
                            applications. I focus on React, Tailwind, and creating beautiful
                            designs with clean code.
                        </p>
                        <div className="flex justify-center">
                            <a href='/Joyel_Shaji_Resume.pdf' download>
                                <button  data-aos='fade-up' data-aos-delay='1800'  className="inline-flex items-center text-white bg-orange-500 border-2 border-white py-3 px-8 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-orange-400 hover:border-yellow-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]">
                                    Download CV
                                </button>

                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-10 md:mt-0">
                        <div className="w-96 h-96 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-800 shadow-lg">
                            <img
                                src="2.png"
                                alt="Profile"
                                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
