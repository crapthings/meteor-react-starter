import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

import Err from '../components/err'

export default function LoginComp () {
  const nav = useNavigate()

  const onSubmit = (evt) => {
    evt.preventDefault()
    const username = evt.target[0].value
    const password = evt.target[1].value

    Meteor.loginWithPassword(username, password, (ex) => {
      if (ex) return

      nav('/')
    })
  }

  return (
    <div>
      <Err />
      <form onSubmit={onSubmit} className='flex flex-col w-[320px] space-y-4'>
        <input type='text' autoComplete='new-password' defaultValue='admin' className='p-4 py-2 bg-gray-100' />
        <input type='password' autoComplete='new-password' defaultValue='admin' className='p-4 py-2 bg-gray-100' />
        <input type='submit' value='Login' className='p-4 py-2 bg-gray-100' />
        <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}
