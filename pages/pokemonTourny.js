import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PokemonTourny() {
  return (
    <>
    <main>
      <div data-aos="fade-right"  data-aos-duration="1000">
        <h1 className="text-3xl font-extralight m-5 text-gray-200 tracking-widest">Pokemon World Tournament</h1>
      </div>
        <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-row sm:justify-center md:justify-start lg:justify-start">
            <a href="https://6452e72c920a5d0677d8aee9--meek-treacle-ec8ccb.netlify.app/"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Deployed applicaion</a>
            <a href="https://github.com/ChrisCasey-codestuff/WorldPokemonTournament"
            className="border-2 m-5 p-5 rounded-md text-gray-400 border-gray-400 hover:text-gray-300">Github repo</a>
      </div>
      <div data-aos="fade-right"  data-aos-duration="1000" className="flex flex-col sm:items-center sm:justify-center lg:items-start md:items-start">
        <h2 className="text-2xl m-5 text-gray-200 font-light">Welcome</h2>
        <p className="m-5 text-xl sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide lg:w-2/3 md:w-2/3 sm:w-full">This is the Pokemon World Tournament! A team Pokemon battle game built using vanilla Javascript and AJAX and the wonderful Pokemon API.</p>
        <div data-aos="fade-up"  data-aos-duration="1000" className="border-2 border-gray-300 p-5 rounded-md m-5 lg:w-2/3 md:w-2/3 sm:w-full">
          <p className="m-5 text-2xl text-gray-200">How to use:</p>
          <ol className="sm:text-center lg:text-left md:text-left text-gray-300 font-light tracking-wide">
            <li className="m-5 text-lg">1. Click 'Assemble Team' to gather a team of 4 pokemon.</li>
            <li className="m-5 text-lg">2. Once you are satisfied with your team, click "Encounter Opponent" to challenge a rival trainer.</li>
            <li className="m-5 text-lg">3. Once you have a team and an enemy you are ready to battle. Click the 'battle' button to engage.</li>
            <li className="m-5 text-lg">4. Once in battle mode, you will have the ooportunity to select a Pokemon to attack the enemy team, each time you make a choice that Pokemon will either land an attack on an enemy Pokemon or miss, then the enemy team will have a chance to attack back.</li>
            <li className="m-5 text-lg">5. Teams will continue taking turns until one team has no Pokemon remaining.</li>
          </ol>
        </div>
      </div>
    </main>
    </>
  )
}