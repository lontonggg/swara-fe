import { RegisterPage } from '@/components/authentication/RegisterPage'
import { NavbarLogin } from '@/components/common/NavbarLogin'
import React from 'react'

export default function page() {
  return (
    <>
        <NavbarLogin />
        <RegisterPage />
    </>
  )
}
