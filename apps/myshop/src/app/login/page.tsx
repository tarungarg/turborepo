/**
 * Login page component.
 *
 * Renders a heading with a link to the home page.
 */
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <h1>
      <Link href="/product">Product</Link>
    </h1>
  )
}

export default Login
