import React from 'react'
import { Outlet } from 'react-router-dom'

import Auth from './auth'
import Nav from './nav'
import Err from './err'

export default function Layout () {
  return (
    <Auth>
      <Nav />
      <Err />
      <Outlet />
    </Auth>
  )
}
