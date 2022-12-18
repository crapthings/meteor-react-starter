import Session from 'meteor/session'
import { check } from 'meteor/check'

import { safeMethods } from '/imports/utils'
import { Users } from '/imports/collections'

safeMethods({
  removeUser (_id) {
    check(_id, String)

    if (_id === Meteor.userId()) {
      throw new Meteor.Error(500, `can't remove self`)
    }

    if (Users.findOne(_id)) {
      return Users.remove(_id)
    }

    throw new Meteor.Error(500, 'user not found')
  },
})
