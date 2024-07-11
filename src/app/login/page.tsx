import { LoginPage } from '@/components/authentication/LoginPage'
import { NavbarLogin } from '@/components/common/NavbarLogin'
import React from 'react'

export default function page() {
  return (
    <>
        <NavbarLogin />
        <LoginPage />
    </>
  )
}
