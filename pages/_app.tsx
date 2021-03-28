import '../styles/globals.css'

import { GetServerSideProps } from 'next' // testing ts integration

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
