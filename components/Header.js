import Link  from 'next/link';
import { motion } from 'framer-motion';

function Header() {
  return (
  <section id="home">
  <header className="flex justify-between items-center h-auto w-auto bg-black">
     <h1 className="text-5xl ml-10 mt-12 mb-5 lg:w-3/4 sm:w-1/2">
      <Link href="/" className="text-gray-300 hover:text-gray-400 transition-all tracking-wider font-extralight lg:w-2/3 sm:w-1/4">Christopher Michael Casey - Software Developer</Link>
     </h1>
    <nav className="sm:bg-black ml-10  mb-10 mr-10 lg:mt-10 sm:mt-5 md:mt-2 fixed top-0 right-0 z-50 lg:bg-none md:bg-none">
      <ul className="flex lg:flex-col lg:justify-start md:flex-col md:justify-start sm:flex-row sm:justify-between sm:items-center">
      <li className="m-2">
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

    <p className="text-gray-400 border-2 border-black hover:border-gray-300 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">GitHub</p>


    <p className="text-gray-400 border-2 border-black hover:border-gray-300 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">LinkedIn</p>


    <p className="text-gray-400 border-2 border-black hover:border-gray-300 text-2xl mr-5 p-2 mt-12 font-extralight rounded-sm">Contact</p>

  </div>
  </section>
  )
}

export default Header;