import Image from 'next/image'
import { Inter } from 'next/font/google'
import Projects from './projects.js'
import Contact from './contact.js'
import Resume from './resume.js'
import IoLogoJavascript from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
    <main className="mt-5">
    <div>
    <div className="flex flex-row ml-40 text-5xl mt-10">

    </div>
    <div className="ml-12 mt-10">
      <p className="text-2xl opacity-0 animate-pulse">Hello,</p>
      <p className="text-2xl opacity-0 animate-pulse">你好,</p>
    </div>
    </div>
        <div className="flex flex-col items-start ml-2">
        <p className="text-gray-400 text-2xl bg-slate ml-10 mt-10 w-5/6 mr-80 font-light leading-loose">I am a bilingual full stack software engineer specializing in React and Javascript.
          I am very passionate about using cutting edge technologies and strategies to implement
          elegant solutions to problems that are both complex and dynamic.</p>
        </div>
        <h2>
        </h2>
        <div className="mt-10">
        <section id="projects" className="mt-10">
          <Projects/>
        </section>
        </div>
        <section id="resume" className="mt-10">
          <Resume/>
        </section>
        <section id="contact" className="mt-10">
          <Contact/>
        </section>
      </main>
    </>
  );
};

export default Home;
