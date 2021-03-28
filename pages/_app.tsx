import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { UserContext } from '../lib/context';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{user:{}, username:"mawulijo"}}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp