import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PokemonTourny() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-between m-10 ${inter.className}`}>
      <h1 class="text-4xl font-extralight text-gray-300">Pokemon Tournament</h1>
      <a href="https://meek-treacle-ec8ccb.netlify.app/" className="text-2xl tex-blue-500 text-light">Deployed applicaion</a>
      <a href="https://github.com/ChrisCasey-codestuff/WorldPokemonTournament" className="text-2xl tex-blue-500 text-light">Github repo</a>
      <div>
        <h2></h2>
        <p></p>
        <ul></ul>
      </div>

    </main>
  )
}