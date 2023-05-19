import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiMail } from 'react-icons/fi'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <p className="text-4xl font-extralight tracking-widest text-slate-200 ml-5">Contact Me</p>
      <div className="flex flex-row mt-10 mb-32">
        <div>
          <form className="flex flex-col p-10 rounded-md" action="https://getform.io/f/ab2831ce-9681-4e89-9a86-6652d337ba8c" method="POST">
            <div className="flex flex-row justify-start pb-5 pt-5 m-10">
              <div className="flex flex-col m-5">
              <p>First Name</p>
              <input type="text" name="first name" className="m-2 rounded-md"></input>
              </div>
              <div className="flex flex-col m-5">
                <p>Last Name</p>
              <input type="text" name="last name" className="m-2 rounded-md"></input>
              </div>
            </div>
            <div className="flex flex-col m-5">
            <p>Email</p>
            <input type="text" name="email" className="m-2 mb-10 rounded-md"></input>
            </div>
            <div className="flex flex-col m-5">
              <p>Message</p>
              <textarea name="message"className="m-2 pt-10 rounded-md text-black"></textarea>
            </div>
            <input type="submit" className="border-2 border-white rounded-md"></input>
          </form>
        </div>
      </div>
    </main>
  )
}
