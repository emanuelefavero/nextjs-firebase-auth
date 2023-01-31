import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // * If user is not logged in, redirect to login page
    if (!user) {
      router.push('/login')
    }
  }, [router, user])

  return (
    <>
      {
        // * If user is logged in, show children
        user ? children : null
      }
    </>
  )
}
