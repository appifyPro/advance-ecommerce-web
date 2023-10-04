// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import "bootstrap/dist/css/bootstrap.min.css";
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
 import "bootstrap/dist/css/bootstrap.min.css";
 //import '../styles/project.css'
 import GlobalStyle from '../styles/global';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'

 import { Provider } from 'react-redux';
 import store from "../store/store"

export default function App({ Component, pageProps }: AppProps) {
  


  return <Provider store={store}>
  
  <div>
          
          <GlobalStyle />
  <Component {...pageProps} />
  <ToastContainer/>
  </div>
  </Provider>
  
  

}
   
