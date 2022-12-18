import React from 'react'
import { useSubscribe, useTracker } from 'meteor/react-meteor-data'

import { Users } from '/imports/collections'
import { betterCall } from '/imports/utils-client'

export default function UsersComp () {
  const ready = useSubscribe('users')

  const users = useTracker(() => Users.find().fetch())

  if (!ready) return null

  const onRemoveUser = (_id) => async () => {
    await betterCall('removeUser', _id)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>username</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>

            <td>
              <button onClick={onRemoveUser(user._id)}>remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
