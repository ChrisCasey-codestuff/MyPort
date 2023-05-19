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
      <h2 className="flex text-gray-400 font-extrathin text-lg italic ml-16 mt-10 w-5/6 sm:mr-10 lg:mr-0 md:mr-0">“True education is a kind of never ending story — a matter of continual beginnings, of habitual fresh starts, of persistent newness.”
         ― J. R. R. Tolkien</h2>
         <div className="flex flex-row justify-center w-1/2 mt-10 lg:pl-32 md:pl-8 sm:pl-60 lg:pr-24">
         <h3 className="text-gray-300 text-4xl font-extralight">Skills</h3>
         </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center">
      <div className="flex flex-row lg:justify-start md:justify-start sm:justify-center bg-black w-1/2 rounded-md p-5 sm:mr-32">

        <div className="flex flex-row items-center lg:pl-60 sm:pl-60 md:mr-0">
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
        <div className="flex flex-col justify-start">
        <div data-aos="fade-zoom-in"  data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
            <SiMongodb size={60} alt="MongoDB"/>
          </div>
          <div data-aos="fade-zoom-in" data-aos-duration="700" className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
            <DiDjango alt="Django" size={60}/>
          </div>
        </div>
        </div>
      </div>

      <a className="lg:ml-10 md:ml-14 lg:pl-10 md:pl-10 lg:mr-36 md:mr-36" href="../public/myRes.pdf" download>
      <div data-aos="flip-left" data-aos-duration="1000" className="flex flex-row items-end justify-end border-2 border-gray-400 hover:border-gray-300 bg-black m-5 mr-40 rounded-md p-5 w-1/2 sm:ml-32 lg:ml-0 md:ml-0 sm:w-2/3">
        <div className=" text-gray-300 text-2xl font-extralight p-20">
            <p className="text-gray-300 hover:text-gray-400 pl-10 pr-10 pt-5 pb-5">Download My Resume</p>
        </div>
      </div>
      </a>

      </div>
    </main>
  )
}