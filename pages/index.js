import Image from 'next/image'
import { Inter } from 'next/font/google'

import Projects from './projects.js'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
    <div className="ml-10 mt-10">
      <p className="text-2xl opacity-0 animate-pulse">Hello,</p>
      <p className="text-2xl opacity-0 animate-pulse">你好,</p>
    </div>
      <div className="flex flex-col items-center">
        <h2 className="text-slate-200 text-lg">Software Developer specializing in Javascript, Python, React, Next.js</h2>
        </div>
        <div className="flex flex-col items-start">
        <p className="text-slate-200 text-sm bg-slate ml-20 mt-20 mr-80 w-96">I am a bilingual full stack software engineer specializing in React and Javascript,
          I am very passionate about using cutting edge technologies and strategies to deliver
          elegant solutions to problems that are both complex and dynamic. I leverage my creative ability,
          organizational skills, and technical knowledge to approach and tackle challenges with enthusiasm and
          confidence. I aim to work full time with a team of dedicated and passionate individuals in an environment
          that fosters personal and professional growth.</p>
        </div>

      <main className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}>
        <section id="projects">
          <Projects/>
        </section>
        <section id="resume">
          {/* Resume content goes here */}
        </section>
        <section id="contact">
          {/* Contact content goes here */}
        </section>
      </main>
    </>
  );
};

export default Home;
