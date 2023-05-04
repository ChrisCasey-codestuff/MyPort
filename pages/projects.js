import Image from 'next/image'
import { Inter } from 'next/font/google'
import { projectCardBg } from '../public/project-card-bg.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className="p-5">
      <div className="flex flex-row justify-center">
        <h2 className="text-3xl m-10 text-slate-200 font-thin tracking-widest mr-5">Past and Current Projects</h2>
      </div>
      <div className="flex flex-row justify-end mr-20 mt-5">
      <div className="flex flex-col justify-end">
      <div className="bg-gradient-to-b from-slate-700 to-black m-10 p-10 rounded-md drop-shadow-md">
        <p className="text-slate-300 hover:text-gray-500 italic text-xl mb-10 mr-40">Snake Twitter</p>
      </div>
      <div className="bg-gradient-to-b from-slate-700 to-black m-10 p-10 rounded-md drop-shadow-md">
        <p className="text-slate-300 hover:text-gray-500 italic text-xl mb-10 mr-40">React Analytics DashBoard</p>
      </div>
      <div className=" bg-gradient-to-b from-slate-700 to-black m-10 p-10 rounded-md drop-shadow-md">
        <p className="text-slate-300 hover:text-gray-500 italic text-xl mb-10 mr-40">Pokemon World Tournament</p>
      </div>
      </div>
      </div>
    </main>
  )
}
