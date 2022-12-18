import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'

export const safeMethods = function MeteorMethods (methods) {
  const _methods = { ...methods }

  for (const name in _methods) {
    const func = _methods[name]

    _methods[name] = function (...args) {
      if (!Meteor.userId()) {
        throw new Meteor.Error(500, 'unauthorized')
      }

      return func.call(this, ...args)
    }
  }

  Meteor.methods(_methods)
}
