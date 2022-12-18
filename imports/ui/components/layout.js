import React from 'react'
import { Outlet } from 'react-router-dom'

import Auth from './auth'
import Nav from './nav'
import Err from './err'

export default function Layout () {
  return (
    <Auth>
      <Nav />
      <div className='flex-1 p-8'>
        <Err />
        <Outlet />
      </div>
    </Auth>
  )
}
