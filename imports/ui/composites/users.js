import React, { Suspense } from 'react'
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
    <Suspense fallback={<div>loading</div>}>
      <table className='w-full text-left table-fixed'>
        <thead>
          <tr>
            <th className='p-2 border border-slate-300'>username</th>
            <th className='p-2 border border-slate-300'></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className='p-2 border border-slate-300'>{user.username}</td>

              <td className='p-2 border border-slate-300'>
                <button onClick={onRemoveUser(user._id)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Suspense>
  )
}
