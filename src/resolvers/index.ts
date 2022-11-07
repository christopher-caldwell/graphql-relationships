import { eventMutations, eventQueries } from './event'
import { organizationMutations, organizationQueries } from './organization'
import { locationMutations, locationQueries } from './location'
import { DateScalar } from './date'

import { organization } from './organization/loader'
import { locations } from './location/loader'
import { events } from './event/loader'

export const resolvers = {
  Query: {
    ...eventQueries,
    ...locationQueries,
    ...organizationQueries
  },
  Mutation: {
    ...eventMutations,
    ...locationMutations,
    ...organizationMutations
  },
  Event: {
    organization
  },
  Location: {
    organization
  },
  Organization: {
    locations,
    events
  },
  Date: DateScalar
}
