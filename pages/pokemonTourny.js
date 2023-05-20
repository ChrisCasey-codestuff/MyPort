import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PokemonTourny() {
  return (
    <main className={`flex flex-col items-start justify-between m-10`}>
      <div className="sm:flex sm:flex-row sm:justify-center md:justify-start lg:justify-start w-full lg:ml-10">
        <h1 className="text-4xl font-extralight text-gray-300">Pokemon Tournament</h1>
      </div>
      <div className="flex flex-col justify-start sm:items-center lg:items-start md:items-start w-full">
        <a href="https://6452e72c920a5d0677d8aee9--meek-treacle-ec8ccb.netlify.app/" className="text-xl text-gray-400 hover:text-gray-200 font-light ml-10 mr-10 mb-5 mt-5 border-2 hover:border-gray-300 border-gray-500 p-5 rounded-md w-1/2">Deployed applicaion</a>
        <a href="https://github.com/ChrisCasey-codestuff/WorldPokemonTournament" className="text-xl text-gray-400 hover:text-gray-200 font-light ml-10 mr-10 border-2 hover:border-gray-300 border-gray-500 p-5 rounded-md w-1/2">Github repo</a>
        <div className="mt-6 mr-5 ml-5">
          <h2 className="m-5 text-2xl font-light text-gray-200 sm:text-center lg:text-left">Welcome</h2>
          <p className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left w-1/2 sm:ml-40 lg:ml-0 md:ml-0"> This is the Pokemon World Tournament!.</p>
          <h3 className="m-5 text-2xl font-lighttext-gray-200 sm:text-center lg:text-left">How to Play:</h3>
          <ol className="w-full">
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left">click 'Assemble Team' to generate a pokemon team of 4</li>
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left">click 'Encounter Opponent' to generate an adversary pokemon team.</li>
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left">Now you're ready! click 'Battle' to begin playing.</li>
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left">Each turn you may select one Pokemon to attack the enemy team with, the enemy will then have a chance to retaliate before you choose again.</li>
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left">The last team with Pokemon still standing wins!</li>

          </ol>
        </div>
      </div>
    </main>
  )
}