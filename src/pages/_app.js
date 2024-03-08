import "@/styles/globals.css";
import { Raleway } from 'next/font/google'
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'; 

const raleway = Raleway({
  weight: '400',
  preload: false,
})
 
export default function App({ Component, pageProps }) {
 
  return (
    <>
    <main className={raleway.className}>
      <Component {...pageProps} /> 
    </main>
    <ToastContainer/>
    </>
  )
}



      
