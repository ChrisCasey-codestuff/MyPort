import Image from 'next/image'
import { Inter } from 'next/font/google'
import { projectCardBg } from '../public/project-card-bg.jpeg'
import Link  from 'next/link';
import { snakeFeedPic } from '../public/snaketwitterfeed.png'
import { snakeSignupPic } from '../public/snaketwittersignup.png'
import { snakeUserPic } from '../public/snaketwitteruserfeed.png'


const inter = Inter({ subsets: ['latin'] })

const twitImages = [snakeFeedPic, snakeSignupPic, snakeUserPic]


export default function Projects() {
  return (
    <main className="pl-0">
      <div data-aos="fade-up"  data-aos-duration="1200" className="flex flex-row justify-center sm:ml-28 md:ml-0 lg:ml-0 sm:text-center">
        <h2 className="text-4xl m-10 text-gray-300 tracking-widest font-extralight mr-14">My Projects</h2>
      </div>
      <div className="flex flex-row lg:items-end md:items-end sm:items-center lg:justify-end md:justify-end sm:justify-center mt-5 mr-3 ml-2 sm:ml-28 md:ml-0 lg:ml-0">
        <div className="lg:mr-10 md:mr-10 sm:mr-0">
          <div className="flex flex-row lg:justify-end  sm:justify-center md:justify-start md:mr-20 lg:mr-20 sm:mr-0">
          <div data-aos="fade-up"  data-aos-duration="1000" className="bg-black lg:m-5 md:m-5 sm:ml-5 sm:mt-5 sm:mr-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent lg:w-1/2 md:w-4/5 sm:w-full">
            <Link href="/snakeTwitter">
              <div className="flex flex-row">
                <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light lg:text-left md:text-left sm:text-center">Snake Twitter</p>
              </div>
            </Link>
            <Link href="/snakeTwitter">
            <p className="text-gray-400 text-lg mb-10 hover:text-gray-500 lg:text-left md:text-left sm:text-center">A Snake-Themed Twitter-like application built using Django and Python. Live chat coming soon!</p>
            </Link>
          </div>

          </div>


          <div className="flex flex-row lg:justify-start md:justify-start mr-30 sm:justify-center">
            <div data-aos="fade-up"  data-aos-duration="1000" className="bg-black lg:m-5 md:m-5 sm:ml-5 sm:mt-5 sm:mr-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent lg:w-1/2 md:w-4/5 sm:w-full lg:text-left md:text-left sm:text-center lg:mr-40">
            <Link href="/myPortfolio">
              <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light">My Portfolio</p>
            </Link>
            <Link href="/myPortfolio">
              <p className="text-gray-400 text-lg mb-10 hover:text-gray-500">The application you are currently using. I built this web app using a combination of Next.js and TailwindCSS.</p>
            </Link>
            </div>
          </div>


            <div className="flex flex-row lg:justify-end  sm:justify-center md:justify-start md:mr-20 lg:mr-20">
              <div data-aos="fade-up"  data-aos-duration="1000" className="bg-black lg:m-5 md:m-5 sm:ml-5 sm:mt-5 sm:mr-5 p-5 rounded-md border-2 border-gray-400 hover:border-gray-500 drop-shadow-md bg-transparent lg:w-1/2 md:w-4/5 sm:w-full">
              <Link href="/pokemonTourny">
                <p className="text-gray-300 hover:text-gray-400 italic text-2xl mb-10 mr-40 font-light lg:text-left md:text-left sm:text-center">Pokemon World Tournament</p>
              </Link>
              <Link href="/pokemonTourny">
                <p className="text-gray-400 text-lg mb-10 hover:text-gray-500 lg:text-left md:text-left sm:text-center">One of my earliest Javascript projects, enter the Pokemon World Tournament! Form a team, encounter a rival pokemon trainer, and battle it out! </p>
              </Link>
              </div>
            </div>

        </div>
        </div>
    </main>
  )
}
