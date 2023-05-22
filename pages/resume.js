import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GrReactjs } from 'react-icons/gr'
import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { TbBrandTailwind } from 'react-icons/tb'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiDjango } from 'react-icons/di'
const inter = Inter({ subsets: ['latin'] })

export default function Resume() {
  return (
    <main>
      <div className="flex flex-row justify-center">
        <h2 className="text-4xl m-10 text-gray-300 tracking-widest font-extralight mr-14">My Resume</h2>
      </div>
      <h2 className="flex text-gray-400 font-extrathin text-lg italic lg:ml-16 md:ml-16 sm:ml-10 mt-10 sm:w-5/6 md:w-3/4 lg:w-4/5 sm:mr-10 lg:mr-0 md:mr-0">“True education is a kind of never ending story — a matter of continual beginnings, of habitual fresh starts, of persistent newness.”
         ― J. R. R. Tolkien</h2>
         <div className="flex flex-row justify-center w-1/2 mt-10 lg:pl-32 sm:pl-52 lg:pr-24 sm:pr-12 md:pl-32">
         <h3 className="text-gray-300 text-4xl font-extralight">Skills</h3>
         </div>
      <div className="flex sm:flex-col lg:flex-row md:flex-row md:mr-20">

        <div className="flex flex-row lg:justify-start md:justify-start sm:justify-center bg-black w-1/2 rounded-md p-5 sm:mr-32">

          <div className="flex flex-row items-center lg:pl-60 sm:pl-56 md:pl-8">

            <div className="flex flex-col justify-start">

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
                <GrReactjs size={60} alt="React"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
                <FaPython size={60} alt="Python"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
                <TbBrandTailwind size={60} alt="TailwindCSS"/>
              </div>

            </div>

            <div className="flex flex-col justify-start">
              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
                <IoLogoJavascript size={60} alt="Javascript"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
                <TbBrandNextjs size={60} alt="Next.js"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
                <AiOutlineConsoleSql size={60} alt="SQL"/>
              </div>

            </div>

            <div className="flex flex-col justify-start sm:mr-4 lg:mr-0 md:mr-0">

              <div data-aos="fade-zoom-in"  data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
                <SiMongodb size={60} alt="MongoDB"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
                <DiDjango alt="Django" size={60}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:mr-5">

          <div data-aos="flip-right" data-aos-duration="1000" className="border-2 border-gray-400 p-10 rounded-md m-5">
            <a href="https://docs.google.com/document/d/1-esnALxJljMTqnJeEvhrRC_uaR3tvdVW/edit">View full resume</a>
          </div>

          <a className="border-2 border-gray-400 p-10 rounded-md m-5" href="../public/myRes.pdf" download>
          <div data-aos="flip-left" data-aos-duration="1000" className="">
            <div className="">
                <p className="">Download My Resume</p>
            </div>
          </div>
          </a>

        </div>
      </div>

    </main>
  )
}