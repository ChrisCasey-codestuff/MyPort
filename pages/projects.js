import Image from 'next/image'
import { Inter } from 'next/font/google'
import { projectCardBg } from '../public/project-card-bg.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl">Past and Current Projects</h1>
      <div className="bg-cardBg">
        <h2 className="text-slate-200 hover:text-gray-500">Snake Twitter</h2>
      </div>
      <div className="bg-cardBg">
        <h2 className="text-slate-200 hover:text-gray-500">React Analytics DashBoard</h2>
      </div>
      <div className="bg-cardBg">
        <h2 className="text-slate-200 hover:text-gray-500">Pokemon World Tournament</h2>
      </div>
    </main>
  )
}
