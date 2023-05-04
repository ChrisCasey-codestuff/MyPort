import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Resume() {
  return (
    <main>
      <div className="flex flex-row justify-center ml-2">
        <p className="text-3xl font-thin tracking-widest text-slate-200">Resume</p>
      </div>
      <h2 className="flex animate-fade-in font-thin text-lg italic ml-20 mt-10 w-1/2">“True education is a kind of never ending story — a matter of continual beginnings, of habitual fresh starts, of persistent newness.”
         ― J. R. R. Tolkien</h2>
      <object  type="application/pdf" width="100%" height="500px">
        <p>Unable to display PDF file. <a href="">Download</a> instead.</p>
      </object>
    </main>
  )
}