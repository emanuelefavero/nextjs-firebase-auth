import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  return (
    <div className='m-4'>
      <h1>Hello{user && `, ${user.email}`}</h1>
      <Link href='/dashboard'>Go To Your Secret Dashboard</Link>
    </div>
  )
}
