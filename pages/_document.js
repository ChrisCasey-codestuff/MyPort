import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Particles } from 'react-tsparticles';
import particlesConfig from '../particlesConfig.js';



export default function Document() {

  return (
    <Html lang="en">
      <Head/>
      <div className="App relative overflow-hidden">
      <div className="absolute">
      <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <body className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
      </div>
    </Html>
  )
}
