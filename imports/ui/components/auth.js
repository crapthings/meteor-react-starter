import React, { useEffect } from 'react'
import { Session } from 'meteor/session'
import {
  useLoggingIn,
  useLoggingOut,
  useUserId,
} from 'meteor/react-meteor-accounts'

import Err from './err'
import Login from '../composites/login'

Accounts.onLogin(() => {
  Session.set('error', null)
})

Accounts.onLoginFailure((ex) => {
  Session.set('error', ex.error.reason)
})

Accounts.onLogout(() => {
  Session.set('error', null)
})

export default function Auth ({ children }) {
  const loggingIn = useLoggingIn()
  const loggingOut = useLoggingOut()
  const userId = useUserId()

  if (loggingIn) {
    return (
      <div>Logging in</div>
    )
  }

  if (loggingOut) {
    return (
      <div>Logging out</div>
    )
  }

  if (userId) {
    return children
  }

  return <Login />
}
