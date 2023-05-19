import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SnakeTwitter() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-between m-10 ${inter.className}`}>
      <h1 class="text-4xl font-extralight text-gray-300">Snake Twitter</h1>
      <a href="https://snaketwitter.herokuapp.com/" className="text-2xl text-blue-500 font-light">Deployed applicaion</a>
      <a href="https://github.com/ChrisCasey-codestuff/snakeTwitter" className="text-2xl text-blue-500 font-light">Github repo</a>
      <div>
        <h2></h2>
        <p></p>
        <ul></ul>
      </div>
      <p>screenshots</p>
    </main>
  )
}