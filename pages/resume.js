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
      <div className="flex flex-row justify-center sm:ml-12 w-full md:ml-0 lg:ml-0">
        <h2 className="text-4xl m-10 text-gray-300 tracking-widest font-extralight lg:mr-14 md:mr-14">My Resume</h2>
      </div>
      <div className="flex flex-row justify-center md:mr-10 sm:ml-28 md:ml-0 lg:ml-0">
        <h2 className="flex text-gray-400 font-extrathin text-lg italic lg:ml-16 md:ml-16 sm:ml-0 mt-6 sm:w-full md:w-1/2 lg:w-4/5 sm:mr-0 lg:mr-10 md:mr-10">“True education is a kind of never ending story — a matter of continual beginnings, of habitual fresh starts, of persistent newness.”
         ― J. R. R. Tolkien</h2>
      </div>
      <div className="flex sm:flex-col lg:flex-row md:flex-row w-full justify-center sm:w-full lg:ml-10">

        <div className="flex flex-col items-center lg:mr-20 md:mr-12 sm:mr-0 mt-10">

            <p className="text-3xl font-extralight tracking-widest md:ml-8 lg:ml-20 sm:ml-28 ">Skills</p>


          <div className="flex flex-row items-center sm:ml-32 md:ml-12 lg:ml-24">

            <div className="flex flex-col justify-start">

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md text-white">
                <GrReactjs size={60} alt="React"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md text-white">
                <FaPython size={60} alt="Python"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md text-white">
                <TbBrandTailwind size={60} alt="TailwindCSS"/>
              </div>

            </div>

            <div className="flex flex-col justify-start">
              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md text-white">
                <IoLogoJavascript size={60} alt="Javascript"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md text-white">
                <TbBrandNextjs size={60} alt="Next.js"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md text-white">
                <AiOutlineConsoleSql size={60} alt="SQL"/>
              </div>

            </div>

            <div className="flex flex-col justify-start sm:mr-4 lg:mr-0 md:mr-0">

              <div data-aos="fade-zoom-in"  data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md text-white">
                <SiMongodb size={60} alt="MongoDB"/>
              </div>

              <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md text-white">
                <DiDjango alt="Django" size={60} color=""/>
              </div>
            </div>
          </div>
          </div>



        <div className="flex flex-col items-center md:mr-20 lg:mr-20 sm:mr-0 mt-14 sm:ml-12 text-center sm:w-full md:ml-0 lg:ml-0">

          <div data-aos="flip-right" data-aos-duration="1000" className="border-2 border-gray-400 p-10 rounded-md m-5 text-gray-200">
            <a href="https://docs.google.com/document/d/1-esnALxJljMTqnJeEvhrRC_uaR3tvdVW/edit">
              View full resume
            </a>
          </div>

          <a className="border-2 border-gray-400 p-10 rounded-md m-5" href="/Users/tomwhiteman/my-port/public/myRes.pdf" download>
          <div data-aos="flip-left" data-aos-duration="1000" className="">
            <div className="">
                <p className="text-gray-200">Download My Resume</p>
            </div>
          </div>
          </a>
        </div>
      </div>

    </main>
  )
}