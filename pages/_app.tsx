import '../styles/globals.css'

export default MyApp
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}