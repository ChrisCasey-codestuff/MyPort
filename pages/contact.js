import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiMail } from 'react-icons/fi'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <p className="text-4xl font-extralight tracking-widest text-slate-200 ml-5">Contact Me</p>
      <div className="flex flex-row mt-14 mb-32">
        <div>
          <form className="flex flex-col p-5 rounded-md" action="https://getform.io/f/ab2831ce-9681-4e89-9a86-6652d337ba8c" method="POST">
            <div className="flex flex-row pb-5 pt-5">
              <div className="flex flex-col">
              <p>First Name</p>
              <input type="text" name="first name" className="m-2 rounded-md"></input>
              </div>
              <div className="flex flex-col">
                <p>Last Name</p>
              <input type="text" name="last name" className="m-2 rounded-md"></input>
              </div>
            </div>
            <div className="flex flex-col">
            <p>Email</p>
            <input type="text" name="email" className="m-2 mb-10 rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <p>Message</p>
              <textarea name="message"className="m-2 pt-10 rounded-md"></textarea>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
