import Link from 'next/link'
import Head from 'next/head'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  return (
    <>
      <Head>
        <title>
          {user ? `Welcome, ${user.email}` : 'Next.js Firebase Auth'}
        </title>
      </Head>
      <div className='m-4'>
        <h1>Welcome{user && `, ${user.email}`}</h1>
        <Link href='/dashboard'>Go To Your Secret Dashboard</Link>
      </div>
    </>
  )
}
