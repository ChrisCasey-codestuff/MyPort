import Link  from 'next/link';

function Header() {
  return (
  <section id="home">
  <header className="flex justify-between items-center h-auto w-auto bg-black">
     <h1 className="text-5xl ml-8 mt-12 mb-5">
      <Link href="/" className="m-2 text-gray-300 hover:text-gray-400 transition-all tracking-wider font-extralight w-2/3 md:w-1/2">Christopher Michael Casey - Software Developer</Link>
     </h1>
    <nav className="m-10 mr-10 fixed top-0 right-0 z-50">
      <ul>
      <li className="m-2">
          <Link href="/#home" className="text-gray-300 hover:text-gray-400 transition-all font-thin">
            <p className="text-xl">Home</p>
          </Link>
        </li>
        <li className="m-2">
          <Link href="/#projects" className="text-gray-300 hover:text-gray-400 transition-all font-thin">
            <p className="text-xl">Projects</p>
          </Link>
        </li>
        <li className="m-2 transition-all font-thin text-gray-300 hover:text-gray-400">
          <Link href="/#resume">
            <p className="text-xl">Resume</p>
          </Link>
        </li>
        <li className="m-2 text-gray-300 hover:text-gray-400 transition-all font-thin">
          <Link href="/#contact">
            <p className="text-xl">Contact</p>
          </Link>
        </li>

      </ul>
    </nav>
  </header>
  </section>
  )
}

export default Header;