
import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from './Pages/Skills'
// import Experience from './Pages/Experience'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer1 from './Components/Footer1'

function App() {

  useEffect(() => {
    AOS.init({
      
      duration: 1200, // smooth animation speed (default 400ms)
      easing: "ease-in-out", // smooth easing
     
    })
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      {/* <Experience /> */}
      <Project />
      <Contact />
      <Footer1 />
    </>
  )
}

export default App
