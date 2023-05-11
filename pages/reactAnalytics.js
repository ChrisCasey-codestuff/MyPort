import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ReactAnalytics() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-between m-10 ${inter.className}`}>
      <h1 class="text-4xl font-extralight text-gray-300">React Analytics</h1>
      <a href="https://legendary-lily-950389.netlify.app/" className="text-2xl text-blue-500 font-light">Deployed applicaion</a>
      <a href="https://github.com/ChrisCasey-codestuff/react-analytics-dash" className="text-2xl text-blue-500 font-light">Github repo</a>
      <p>ReadMe copy</p>
      <p>screenshots</p>
    </main>
  )
}