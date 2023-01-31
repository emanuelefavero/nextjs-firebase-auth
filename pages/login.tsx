import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Login = () => {
  const { user, login } = useAuth()

  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()

    // * login function from the AuthContext
    try {
      await login(data.email, data.password)

      // Redirect user to dashboard after login
      router.push('/dashboard')
    } catch (error) {
      console.log(error)

      if (error.code === 'auth/wrong-password') {
        setError('Wrong password, please try again.')
      } else if (error.code === 'auth/user-not-found') {
        setError('User not found, please sign up.')
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email, please try again.')
      } else if (error.code === 'auth/argument-error') {
        setError('Bad request, please try again.')
      } else {
        setError(error.message)
      }
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className='text-center my-3 '>Login</h1>
      <Form onSubmit={handleLogin} className='mb-3'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>

      {
        // * If there is an error, show it
        // error && <p className='text-danger text-center'>{error}</p>
        error && (
          <Alert variant='danger' className='mb-3'>
            {error}
          </Alert>
        )
      }
    </div>
  )
}

export default Login
