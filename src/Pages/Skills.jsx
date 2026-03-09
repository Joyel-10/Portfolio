import React from 'react'

function Skills() {
  const skills = [
    { name: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", img: "html.png" },
    { name: "CSS3", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "Angular", img: "An.png" },
    { name: "GitHub", img: "R.svg" },
    { name: "MongoDB", img: "Mo.png" },
  
  ]

  return (
    <>
      <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
          <div data-aos='fade-up' data-aos-delay='200' className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
            <h1 data-aos='fade-right' data-aos-delay='300' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white'>Skills</h1>
            <p data-aos='fade-right' data-aos-delay='700' className='leading-relaxed text-base'>
              A passionate developer skilled in <b>React</b>, <b>Tailwind CSS</b>, <b>JavaScript</b>, <b>Node.js</b>, and core web technologies like <b>HTML5</b> and <b>CSS3</b>. I also use <b>GitHub</b> for version control and collaboration.
            </p>
          </div>

          {/* Skills Icons */}
          <div data-aos='fade-left' data-aos-delay='1000' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none'>
              {skills.map((skill, index) => (
                <li key={index} className='lg:w-1/3 mb-4 w-1/2 flex flex-col items-center'>
                  <img src={skill.img} alt={skill.name} className='rounded-full w-24 h-24 object-contain bg-white p-2' />
                  <span className='mt-2 text-sm'>{skill.name}</span>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
