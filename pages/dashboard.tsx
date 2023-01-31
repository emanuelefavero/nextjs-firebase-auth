import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { useAuth } from '@/context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <>
      <Head>
        <title>{user ? `${user} dashboard` : 'Next.js Firebase Auth'}</title>
      </Head>
      <Container className='mt-3'>
        <h1>{user && user.email} secret dashboard</h1>
        <p>This route is protected</p>
      </Container>
    </>
  )
}

export default Dashboard
