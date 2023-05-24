import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SnakeTwitter() {
  return (
    <main>
      <div data-aos="fade-right"  data-aos-duration="1000">
        <h1 className="text-3xl font-extralight m-5 text-gray-200 tracking-widest">Snake Twitter</h1>
      </div>
        <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-row sm:justify-center md:justify-start lg:justify-start">
            <a href="https://snaketwitter.herokuapp.com/"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Deployed applicaion</a>
            <a href="https://github.com/ChrisCasey-codestuff/snakeTwitter"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Github repo</a>
      </div>
      <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-col sm:items-center sm:justify-center lg:items-start md:items-start">
        <h2 className="text-2xl m-5 text-gray-200 font-light">Welcome</h2>
        <p className="m-5 text-xl sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide lg:w-2/3 md:w-2/3 sm:w-full">Hiss is a twitter-like application built using Python, Django, postgreSQL, and TailwindCSS</p>
        <div data-aos="fade-up"  data-aos-duration="1000" className="border-2 border-gray-300 p-5 rounded-md m-5 lg:w-2/3 md:w-2/3 sm:w-full">
          <p className="m-5 text-2xl text-gray-200">How to use:</p>
          <ol className="sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide">
            <li className="m-5 text-lg">1. Sign up with a username and password.</li>
            <li className="m-5 text-lg">2. Add a bio to let other users know what you are about</li>
            <li className="m-5 text-lg">3. Create your first 'hiss' and share it for other users to view</li>
            <li className="m-5 text-lg">4. Peruse the main feed to like the 'hiss's' of others or retweet them to your profile feed</li>
          </ol>
        </div>
      </div>
    </main>
  )
}