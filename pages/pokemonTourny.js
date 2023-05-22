import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PokemonTourny() {
  return (
    <main>
      <div className="mt-5">
        <h1 className="">Pokemon Tournament</h1>
      </div>
      <div className="">
      <div className="">
          <a href="https://my-port.herokuapp.com/" className="">Deployed applicaion</a>
          <a href="https://github.com/ChrisCasey-codestuff/MyPort" className="">Github repo</a>
        </div>
        <div className="">
          <h2 className="">Welcome</h2>
          <p className=""> This is the Pokemon World Tournament!.</p>
          <h3 className="">How to Play:</h3>
          <ol className="">
            <li className="">click 'Assemble Team' to generate a pokemon team of 4</li>
            <li className="">click 'Encounter Opponent' to generate an adversary pokemon team.</li>
            <li className="">Now you're ready! click 'Battle' to begin playing.</li>
            <li className="">Each turn you may select one Pokemon to attack the enemy team with, the enemy will then have a chance to retaliate before you choose again.</li>
            <li className="">The last team with Pokemon still standing wins!</li>
          </ol>
        </div>
      </div>
    </main>
  )
}