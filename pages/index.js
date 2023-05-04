import Image from 'next/image'
import { Inter } from 'next/font/google'
import Projects from './projects.js'
import Contact from './contact.js'
import Resume from './resume.js'
import IoLogoJavascript from 'react-icons'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
    <main className="mt-5">
    <div>
    <div className="ml-10 mt-12">
      <p className="text-2xl opacity-0 animate-pulse">Hello,</p>
      <p className="text-2xl opacity-0 animate-pulse">你好,</p>
    </div>
    </div>
        <div className="flex flex-col items-start">
        <p className="text-slate-200 text-lg bg-slate ml-10 mt-10 mr-80 w-112 font-thin leading-loose">I am a bilingual full stack software engineer specializing in React and Javascript,
          I am very passionate about using cutting edge technologies and strategies to implement
          elegant solutions to problems that are both complex and dynamic. I leverage my creative ability,
          organizational skills, and technical knowledge to approach and tackle challenges with enthusiasm and
          confidence. I aim to work full time with a team of dedicated and passionate individuals in an environment
          that fosters personal and professional growth.</p>
        </div>
        <div className="mt-20">
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
