import Link  from 'next/link';

function Header() {
  return (
  <section id="home">
  <header className="flex justify-between items-center h-auto w-auto bg-black">
     <h1 className="text-4xl ml-8 mt-12 mb-5">
      <Link href="/" className="m-2 text-slate-200 hover:text-gray-400 transition-all tracking-wider font-thin">Christopher Michael Casey - Software Developer</Link>
     </h1>
    <nav className="m-10 mr-10 fixed top-0 right-0 z-50">
      <ul>
      <li className="m-2">
          <Link href="#home" className="text-slate-200 hover:text-gray-400 transition-all font-thin">
            <p className="text-lg">Home</p>
          </Link>
        </li>
        <li className="m-2">
          <Link href="#projects" className="text-slate-200 hover:text-gray-400 transition-all font-thin">
            <p className="text-lg">Projects</p>
          </Link>
        </li>
        <li className="m-2 text-slate-200 hover:text-gray-400 transition-all font-thin">
          <Link href="#resume">
            <p className="text-lg">Resume</p>
          </Link>
        </li>
        <li className="m-2 text-slate-200 hover:text-gray-400 transition-all font-thin">
          <Link href="#contact">
            <p className="text-lg">Contact</p>
          </Link>
        </li>

      </ul>
    </nav>
  </header>
  </section>
  )
}

export default Header;