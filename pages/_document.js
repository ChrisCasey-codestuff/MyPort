import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Particles } from 'react-tsparticles';
import particlesConfig from '../particlesConfig.js';



export default function Document() {

  return (
    <Html lang="en">
      <Head/>
      <body className="flex flex-col min-h-screen bg-black">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
