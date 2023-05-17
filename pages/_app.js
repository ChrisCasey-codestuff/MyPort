import '@/styles/globals.css'
import { Particles } from "react-tsparticles";
import particlesConfig from "../particlesConfig.js";
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {

  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )

}
