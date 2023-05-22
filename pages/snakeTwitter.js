import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SnakeTwitter() {
  return (
    <main className="">
      <div className="">
        <h1 className="">Snake Twitter</h1>
      </div>
      <div className="">
        <div className="">
            <a href="https://my-port.herokuapp.com/" className="">Deployed applicaion</a>
            <a href="https://github.com/ChrisCasey-codestuff/MyPort" className="">Github repo</a>
        </div>
        <div className="">
          <h2 className="">Welcome</h2>
          <p className=""> </p>
          <h3 className=""></h3>
          <ol className="">
            <li className=""></li>
            <li className=""></li>
          </ol>
        </div>
      </div>
    </main>
  )
}