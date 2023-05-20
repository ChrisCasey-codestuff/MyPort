import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SnakeTwitter() {
  return (
    <main className={`flex flex-col items-start justify-between m-10`}>
      <div className="sm:flex sm:flex-row sm:justify-center md:justify-start lg:justify-start w-full lg:ml-10">
        <h1 className="text-4xl font-extralight text-gray-300">Snake Twitter</h1>
      </div>
      <div className="flex flex-col justify-start sm:items-center lg:items-start md:items-start w-full">
        <a href="https://snaketwitter.herokuapp.com/" className="text-xl text-gray-400 hover:text-gray-200 font-light ml-10 mr-10 mb-5 mt-5 border-2 hover:border-gray-300 border-gray-500 p-5 rounded-md w-1/2">Deployed applicaion</a>
        <a href="https://github.com/ChrisCasey-codestuff/snakeTwitter" className="text-xl text-gray-400 hover:text-gray-200 font-light ml-10 mr-10 border-2 hover:border-gray-300 border-gray-500 p-5 rounded-md w-1/2">Github repo</a>
        <div className="mt-6 mr-5 ml-5">
          <h2 className="m-5 text-2xl font-light text-gray-200 sm:text-center lg:text-left">Welcome</h2>
          <p className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left w-1/2 sm:ml-40 lg:ml-0 md:ml-0 sm:mr-40 md:mr-0 lg:mr-0"> </p>
          <h3 className="m-5 text-2xl font-lighttext-gray-200 sm:text-center lg:text-left"></h3>
          <ol className="w-full">
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left"></li>
            <li className="m-5 text-lg font-light text-gray-300 sm:text-center lg:text-left"></li>
          </ol>
        </div>
      </div>
    </main>
  )
}