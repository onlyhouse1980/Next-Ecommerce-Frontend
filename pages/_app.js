import '../styles/globals.css'


import { AuthProvider } from '../context/AuthContext'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    
      <content>
      <Layout />
        <Component {...pageProps} />
      </content>
    
    </AuthProvider>
  )
}

export default MyApp
