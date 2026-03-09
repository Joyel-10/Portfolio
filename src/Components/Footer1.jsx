import React from "react";
import { SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";

function Footer1() {
  return (
    <>
      <div className="mt-4 border-t border-gray-800"></div>

      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">@2026 Joyel Shaji | Built with React & Tailwind CSS</p>
          <div className="flex justify-center items-center space-x-6 flex-wrap ">
            
            <div className="flex items-center space-x-2">
              <SiGithub size={20} />
              <a
                href="https://github.com/Joyel-10"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <GrLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/joyel-shaji"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <MdOutlineMail size={20} />
              <a href="mailto:ashjoyel@gmail.com" className="hover:text-gray-400">
                Email
              </a>
            </div>

            <div className="flex items-center space-x-2">
           <LuPhone  size={20}/>
              <span>+91 7736975914</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
