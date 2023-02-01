import React, { createContext, useContext, useEffect, useState } from 'react'

// -< Firebase Imports >-
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '@/firebase/config'

interface IUser {
  uid: string
  email: string
  displayName: string
}

const AuthContext = createContext({
  user: null as IUser | null,
  signup: (email: string, password: string) => {},
  login: (email: string, password: string) => {},
  logout: () => {},
})

// * Export a hook that can be reused to access the context
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // -< User State >-
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(true)
  // console.log(user) // !

  // -< Firebase Listen for changes in the user's authentication state >-
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email as string,
          displayName: user.displayName as string,
        })
      } else {
        setUser(null)
      }

      // Set loading to false once the user state has been set
      setLoading(false)
    })

    // Unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  // -< Firebase Sign Up Function to create a new user >-
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // -< Firebase Login Function to sign in an existing user >-
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // -< Firebase Logout Function >-
  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {/* If loading don't render anything */}
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
