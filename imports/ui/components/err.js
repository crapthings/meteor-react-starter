import React from 'react'
import { Session } from 'meteor/session'
import { useTracker } from 'meteor/react-meteor-data'

export default function Err () {
  const error = useTracker(() => Session.get('error'))

  const onDismiss = () => {
    Session.set('error', null)
  }

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <button onClick={onDismiss}>dismiss</button>
      </div>
    )
  }

  return null
}
