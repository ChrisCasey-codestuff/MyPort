import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ReactAnalytics() {
  return (
    <main className="mt-5">
      <div className="">
        <h1 className="">My Portfolio</h1>
      </div>
      <div className="">
        <div className="">
          <a href="https://my-port.herokuapp.com/" className="">Deployed applicaion</a>
          <a href="https://github.com/ChrisCasey-codestuff/MyPort" className="">Github repo</a>
        </div>
        <div className="">
          <h2 className="">Welcome</h2>
          <p className="">This is the project page for the portfolio you are currently using, I built the weppagfe using NextJS and styled it using TailWindCSS</p>
          <h3 className="">How to use Hiss:</h3>
          <ol className="">
            <li className="">Sign up with a username and password, and log in</li>
            <li className="">Write a 'hiss' on  the main feed and share it with all other users, or peruse the already existing tweets</li>
          </ol>
        </div>
      </div>
    </main>
  )
}