import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PokemonTourny() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-between m-10 ${inter.className}`}>
      <h1 class="text-4xl font-extralight text-gray-300">Pokemon Tournament</h1>
      <p>link to deployed</p>
      <p>link to github repo</p>
      <p>ReadMe copy</p>
      <p>screenshots</p>
    </main>
  )
}