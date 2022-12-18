import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'

export default function Nav () {
  const onLogout = () => Meteor.logout()

  return (
    <div className='flex flex-col'>
      <Link to='/users'>users</Link>
      <button onClick={onLogout}>logout</button>
    </div>
  )
}
