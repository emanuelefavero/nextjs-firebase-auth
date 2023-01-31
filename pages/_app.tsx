import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

// ? Import context
import { AuthContextProvider } from '@/context/AuthContext'

// ? Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// ? Import ProtectedRoute component
import ProtectedRoute from '@/components/ProtectedRoute'

// * List of pages that don't require authentication
const noAuthPages = ['/', '/login', '/signup']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

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

        {
          // * Check if the current page is in the noAuthPages array
          noAuthPages.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            // * If not, wrap the page with ProtectedRoute component
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )
        }
      </AuthContextProvider>
    </>
  )
}
