import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Session } from 'meteor/session'
import { Accounts } from 'meteor/accounts-base'

import Err from '../components/err'

export default function RegisterComp () {
  const nav = useNavigate()

  const onSubmit = (evt) => {
    evt.preventDefault()
    const username = evt.target[0].value
    const password = evt.target[1].value

    Accounts.createUser({ username, password }, (ex) => {
      if (ex) {
        Session.set('error', ex.reason)
        return
      }

      nav('/')
    })
  }

  return (
    <div>
      <Err />
      <form onSubmit={onSubmit} autoComplete='new-password' className='flex flex-col w-[320px] space-y-4'>
        <input type='text' autoComplete='new-password' className='p-4 py-2 bg-gray-100' />
        <input type='password' autoComplete='new-password' className='p-4 py-2 bg-gray-100' />
        <input type='submit' value='Register' className='p-4 py-2 bg-gray-100' />
        <Link to='/login'>Login</Link>
      </form>
    </div>
  )
}
