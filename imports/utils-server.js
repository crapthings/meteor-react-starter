import { Meteor } from 'meteor/meteor'

export const safePublish = function meteorPublish (name, func) {
  Meteor.publish(name, function () {
    if (!this.userId) {
      this.stop()
      return
    }

    return func()
  })
}
