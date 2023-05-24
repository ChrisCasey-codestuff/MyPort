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
    <div data-aos="fade-up" data-aos-duration="1500" className="ml-12 mt-4">
      <p className="text-2xl opacity-0 animate-pulse">Hello,</p>
      <p className="text-2xl opacity-0 animate-pulse">你好,</p>
    </div>
    </div>
        <div data-aos="fade-up" data-aos-duration="1500">
        <div className="flex flex-col lg:items-start md:items-start sm:items-center ml-2  sm:ml-16">
        <p className="text-gray-400 text-2xl bg-slate lg:ml-10 md:ml-10 sm:ml-8 mt-10 sm:w-full lg:w-5/6 md:w-4/5 font-light leading-loose lg:text-left md:text-left sm:text-left">I am a bilingual full stack software engineer and electronic musician. I specialize in building React and Javascript applications.
          I am very passionate about using cutting edge technologies and strategies to implement
          elegant solutions to problems that are both complex and dynamic.</p>
        </div>
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
