import LoginForm from '@/pages/Login.page'
import React from 'react'
import { login } from './actions'

export default function page() {
  return (
    <LoginForm login={login} />

  )
}
