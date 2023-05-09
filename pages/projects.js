import Image from 'next/image'
import { Inter } from 'next/font/google'
import { projectCardBg } from '../public/project-card-bg.jpeg'
import Link  from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className="p-5">
      <div className="flex flex-row justify-center">
        <h2 className="text-4xl m-10 text-gray-300 tracking-widest font-extralight mr-5">My Projects</h2>
      </div>
      <div className="flex flex-row items-end justify-end mt-5">
        <div className="flex flex-col items-end justify-end mr-10">
          <Link href="/snakeTwitter" className="flex flex-row justify-end mr-20">
          <div className="bg-black m-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent w-1/2">
            <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light">Snake Twitter</p>
            <p className="text-gray-400 text-lg mb-10 hover:text-gray-500">A Snake-Themed Twitter-like application built using Django and Python. I am currently wrapping up the "retweet" functionality and preparing to implement live chat between users!</p>
          </div>
          </Link>
          <Link href="/reactAnalytics" className="flex flex-row justify-start mr-30">
          <div className="bg-black m-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent w-1/2">
            <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light">React Analytics DashBoard</p>
            <p className="text-gray-400 text-lg mb-10 hover:text-gray-500">This application is an administrative business dashboard I built following a JavaScript Mastery Youtube tutorial. It leverages large scale context, and a React component library called Syncfusion to implement a wide variety of functional components, charts, and analytics! Very useful!</p>
          </div>
          </Link>
          <Link href="/pokemonTourny" className="flex flex-row justify-end mr-20">
          <div className="bg-black m-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent w-1/2">
            <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light">Pokemon World Tournament</p>
            <p className="text-gray-400 text-lg mb-10 hover:text-gray-500">One of my earliest Javascript projects that I am still very proud of, enter the Pokemon World Tournament! Form a team, encounter a rival pokemon trainer, and battle it out! This application was built using vanille JavaScript, Ajax, and the wonderul Pokemon Api!</p>
          </div>
          </Link>
        </div>
        </div>
    </main>
  )
}
