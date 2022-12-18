import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'

// todo better handle meteor call error pattern
export const betterCall = async (...args) => {
  try {
    const resp = await Meteor.callAsync(...args)
    return resp
  } catch (ex) {
    Session.set('error', ex.reason)
  }
}
