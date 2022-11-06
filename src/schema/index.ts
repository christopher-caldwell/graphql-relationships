// import { buildSchema } from 'graphql'

import { EventSchema } from './event'
import { LocationSchema } from './location'
import { OrganizationSchema } from './organization'
// import { DateScalar } from './date'
import { SharedSchema } from './shared'

/** Joins segments of GraphQL schemas */
const stitchSchema = (...schemas: string[]): string => {
  return schemas.reduce((accumulator, currentValue) => accumulator + '\n' + currentValue, '')
}

export const schema = stitchSchema(EventSchema, LocationSchema, OrganizationSchema, SharedSchema)

// Object.assign(schema.getTypeMap().Date, DateScalar)
