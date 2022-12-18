import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'

export default function Nav () {
  const onLogout = () => Meteor.logout()

  return (
    <div className='flex flex-col w-[220px] bg-purple-700 text-white'>
      <div className='flex-1 divide-y'>
        <Link to='/' className='block p-4'>home</Link>
        <Link to='/users' className='block p-4'>users</Link>
      </div>

      <div className='p-4'>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}
