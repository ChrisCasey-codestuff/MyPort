import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiMail } from 'react-icons/fi'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center">
      <p className="text-4xl font-extralight tracking-widest text-slate-200 ml-5">Contact Me</p>
      <div className="flex flex-row mt-14 mb-32">
        <FiMail className="mr-10 text-gray-300 mt-5" size={80}/>
        <h3 className="font-extralight text-gray-300 leading-loose text-4xl m-5">Chris.Casey1234@gmail.com</h3>
      </div>
    </main>
  )
}
