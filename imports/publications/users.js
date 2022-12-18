import { safePublish } from '/imports/utils-server'
import { Users } from '/imports/collections'

safePublish('users', function () {
  return Users.find({}, { fields: { services: false } })
})
