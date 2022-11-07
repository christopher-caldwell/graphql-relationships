import { event } from './one'
import { createEvent } from './create'
import { eventsForOrg } from './by-org'

export const eventQueries = {
  event,
  eventsForOrg
}

export const eventMutations = {
  createEvent
}
