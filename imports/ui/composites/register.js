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
    <div className='flex flex-row-reverse w-full h-screen'>
      <div className='flex-1 flex justify-center items-center'>
        <img src='./res/undraw_secure_login_pdn4.svg' className='w-[32vw]' />
      </div>

      <div className='flex-1 flex justify-end items-center bg-gray-100'>
        <div className='translate-x-16 -translate-y-16 p-8 bg-white drop-shadow-md'>
          <Err />
          <form onSubmit={onSubmit} className='flex flex-col w-[320px] space-y-4'>
            <input type='text' autoComplete='new-password' placeholder='username' className='p-4 py-2 bg-gray-100' />
            <input type='password' autoComplete='new-password' placeholder='password' className='p-4 py-2 bg-gray-100' />
            <input type='submit' value='Register' className='p-4 py-2 bg-gray-100' />

            <div className='text-right text-sm'>
              <Link to='/login'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
