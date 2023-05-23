import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ReactAnalytics() {
  return (
    <main>
      <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-row sm:justify-center lg:justify-start md:justify-start w-full">
        <h1 className="text-3xl font-extralight m-5 text-gray-200 tracking-widest">My Professional Portfolio</h1>
      </div>
        <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-row sm:justify-center md:justify-start lg:justify-start">
            <a href="https://my-port.herokuapp.com/"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Deployed applicaion</a>
            <a href="https://github.com/ChrisCasey-codestuff/MyPort"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Github repo</a>
      </div>
      <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-col sm:items-center sm:justify-center lg:items-start md:items-start">
        <h2 className="text-2xl m-5 text-gray-200 font-light">Welcome</h2>
        <p className="m-5 text-xl sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide w-2/3">This is my professional portfolio, I built this applicaion using NextJS and styled it with TailwindCSS.</p>
        <div data-aos="fade-up"  data-aos-duration="1000" className="border-2 border-gray-300 p-5 rounded-md m-5 w-2/3">
          <p className="m-5 text-2xl text-gray-200">How to use:</p>
          <ol className="sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide">
            <li className="m-5 text-lg">1. Scroll through to learn more about me.</li>
            <li className="m-5 text-lg">2. Click the through the projects section to see what projects I have built recently and am currently working on.</li>
            <li className="m-5 text-lg">3. Leave your name, contact and a message to get in touch with me.</li>
          </ol>
        </div>
      </div>
    </main>
  )
}