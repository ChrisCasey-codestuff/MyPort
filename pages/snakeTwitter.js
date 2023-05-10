import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SnakeTwitter() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-between m-10 ${inter.className}`}>
      <h1 class="text-4xl font-extralight text-gray-300">Snake Twitter</h1>
      <p>link to deployed</p>
      <p>link to github repo</p>
      <p>ReadMe copy</p>
      <p>screenshots</p>
    </main>
  )
}