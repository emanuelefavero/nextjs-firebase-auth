import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {
  const { user, logout } = useAuth()

  const router = useRouter()

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link href='/' passHref className='text-decoration-none'>
          <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {
              // If user is logged in, show logout button
              user ? (
                <Nav.Link
                  onClick={() => {
                    logout()

                    // after logout, redirect to login page
                    router.push('/login')
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Container>
                    <Link href='/signup'>Signup</Link>
                  </Container>
                  <Container>
                    <Link href='/login'>Login</Link>
                  </Container>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
