import Link  from 'next/link';
import { motion } from 'framer-motion';

function Header() {
  return (
  <section id="home">
  <header className="flex justify-between items-center h-auto w-auto bg-black">
     <h1 className="text-5xl ml-10 mt-12 mb-5 lg:w-3/4 sm:w-1/2">
      <Link href="/" className="text-gray-300 hover:text-gray-400 transition-all tracking-wider font-extralight lg:w-2/3 sm:w-1/4">Christopher Michael Casey - Software Developer</Link>
     </h1>
     <nav className="ml-10 mb-10 sm:bg-black md:bg-transparent lg:bg-transparent
     md:bg-none lg:mt-10 lg:bg-none fixed top-0 lg:right-0 md:right-0 sm:mr-80 md:mr-10 lg:mr-10 lg:z-50 md:z-50 sm:z-50 md:mt-10 sm:mt-0">
      <ul className="flex lg:flex-col lg:justify-start md:flex-col md:justify-start sm:flex-row sm:justify-between sm:items-center">
      <li className="mr-4 mt-2 mb-2 ml-2">
          <Link href="/#home" className="text-gray-400 hover:text-gray-500 transition-all font-extralight">
            <p className="text-xl">Home</p>
          </Link>
        </li>
        <li className="m-2">
          <Link href="/#projects" className="text-gray-400 hover:text-gray-500 transition-all font-extralight">
            <p className="text-xl">Projects</p>
          </Link>
        </li>
        <li className="m-2 transition-all font-extralight text-gray-400 hover:text-gray-500">
          <Link href="/#resume">
            <p className="text-xl">Resume</p>
          </Link>
        </li>
        <li className="m-2 text-gray-400 hover:text-gray-500 transition-all font-extralight">
          <Link href="/#contact">
            <p className="text-xl">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  <div className="flex flex-row justify-center mr-2">
    <a href="https://github.com/ChrisCasey-codestuff">
      <p data-aos="fade-right" className="text-gray-400 border-2 border-black hover:text-gray-500 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">GitHub</p>
    </a>
    <a href="https://www.linkedin.com/in/christopher-casey-se">
      <p data-aos="fade-down" className="text-gray-400 border-2 border-black hover:text-gray-500 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">LinkedIn</p>
    </a>
    <a href="/#contact">
      <p data-aos="fade-left" className="text-gray-400 border-2 border-black hover:text-gray-500 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">Contact</p>
    </a>
  </div>
  </section>
  )
}

export default Header;