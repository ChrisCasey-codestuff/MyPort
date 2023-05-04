import Link  from 'next/link';

function Header() {
  return (
  <header className="flex justify-between items-center h-auto w-auto bg-black">
     <h1 className="text-4xl ml-20 mt-8">
      <Link href="/" className="m-2 text-slate-200 hover:text-gray-400 transition-all">Christopher Michael Casey</Link>
     </h1>
    <nav className=" m-5 mr-9">
      <ul>
        <li className="m-2">
          <Link href="#projects" className="text-slate-200 hover:text-gray-400 transition-all">
            <p>Projects</p>
          </Link>
        </li>
        <li className="m-2 text-slate-200 hover:text-gray-400 transition-all">
          <Link href="#contact">
            <p>Contact</p>
          </Link>
        </li>
        <li className="m-2 text-slate-200 hover:text-gray-400 transition-all">
          <Link href="#resume">
            <p>Resume</p>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header;