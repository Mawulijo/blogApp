import '../styles/globals.css'

export default MyApp
import Navbar from '../components/Navbar';

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}