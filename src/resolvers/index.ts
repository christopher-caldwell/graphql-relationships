import { eventMutations, eventQueries } from './event'
import { organizationMutations, organizationQueries } from './organization'
import { locationMutations, locationQueries } from './location'
import { DateScalar } from './date'

import { organization } from './organization/loader'

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
  Date: DateScalar
}
