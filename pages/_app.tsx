import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

// ? Import context
import { AuthContextProvider } from '@/context/AuthContext'

// ? Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Firebase Auth</title>
        <meta
          name='description'
          content='Next.js Firebase Authentication App'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}
