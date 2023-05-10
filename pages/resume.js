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
      <div className="flex flex-row justify-center ml-2">
        <p className="text-4xl tracking-widest font-extralight text-slate-200">Resume</p>
      </div>
      <h2 className="flex text-gray-400 font-extrathin text-lg italic ml-16 mt-10 w-5/6">“True education is a kind of never ending story — a matter of continual beginnings, of habitual fresh starts, of persistent newness.”
         ― J. R. R. Tolkien</h2>
         <div className="flex flex-row justify-center w-1/2 mt-10 pl-36">
         <h3 className="text-gray-300 text-4xl font-extralight">Skills</h3>
         </div>
      <div className="flex flex-row justify-center">
      <div className="flex flex-row justify-start bg-black w-1/2 rounded-md p-5 ">

        <div className="flex flex-col items-center pl-14">
        <div className="flex flex-row justify-start mr-20">
          <div className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
            <GrReactjs size={100}/>
          </div>
          <div className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
            <FaPython size={100}/>
          </div>
          <div className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
            <TbBrandTailwind size={100}/>
          </div>
          <div className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
            <AiOutlineConsoleSql size={100}/>
          </div>
        </div>
        <div className="flex flex-row justify-start mr-20">
          <div className="box-border m-5 p-4  border-2 border-black hover:border-gray-300 rounded-md">
            <IoLogoJavascript size={100}/>
          </div>
          <div className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
            <TbBrandNextjs size={100}/>
          </div>
          <div className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
            <SiMongodb size={100}/>
          </div>
          <div className="box-border m-5 p-4 border-2 border-black hover:border-gray-300 rounded-md">
            <DiDjango alt="Django" size={100}/>
          </div>
        </div>
        </div>
      </div>
      <a  className="ml-44" href="/resume.pdf" download>
      <div className="flex flex-row items-center justify-center border-2 border-gray-400 hover:border-gray-300 bg-black m-5 mr-40 rounded-md p-5 w-1/2">
        <div className=" text-gray-300 text-2xl font-extralight p-20">
            <p className="text-gray-300 hover:text-gray-400 p-5">Download My Resume</p>
        </div>
      </div>
      </a>
      </div>
    </main>
  )
}