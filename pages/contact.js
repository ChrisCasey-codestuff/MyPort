import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiMail } from 'react-icons/fi'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <p className="text-4xl font-extralight tracking-widest text-slate-200 ml-5">Contact Me</p>
      <div className="flex flex-row mt-10 mb-20">
        <div>
          <form className="flex flex-col lg:p-10  md:p-10 sm:p-5 rounded-md sm:w-1/2" action="https://getform.io/f/ab2831ce-9681-4e89-9a86-6652d337ba8c" method="POST">
            <div className="flex lg:flex-row md:flex-row sm:flex-col sm:items-center  sm:justify-center lg:justify-start  md:justify-start pt-5 lg:m-10 sm:ml-64 sm:m-5 md:m-5">
              <div className="flex flex-col m-5 justify-center items-center">
                <p>First Name</p>
                <input type="text" name="first name" className="m-2 rounded-md"></input>
              </div>
              <div className="flex flex-col m-5  justify-center items-center">
                <p>Last Name</p>
                <input type="text" name="last name" className="m-2 rounded-md"></input>
              </div>
            </div>
            <div className="ml-60">
            <div className="flex flex-col m-5  justify-center items-center">
            <p>Email</p>
            <input type="text" name="email" className="m-2 mb-10 rounded-md"></input>
            </div>
            <div className="flex flex-col m-5 justify-center items-center">
              <p>Message</p>
              <textarea name="message"className="m-2 pt-10 rounded-md text-black"></textarea>
            </div>
            </div>
            <div className="flex flex-row justify-center">
              <input type="submit" className="border-2 border-white rounded-md sm:w-1/3 md:w-2/3 lg:w-2/3"></input>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
