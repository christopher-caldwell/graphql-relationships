import { Resolver } from '../../types'
import { Event, Query, QueryEventArgs } from '../../../generated-types'

export const event: Resolver<undefined, EventResult, QueryEventArgs> = async (_, { id }, { Client }) => {
  const { rows } = await Client.query<QueryEvent>(query, [id])
  const possibleEvent = rows[0]
  if (!possibleEvent) throw new Error(`Cannot find event by ID: ${id}`)
  return possibleEvent
}

// Relationship handled by sub resolver
export type EventResult = Omit<Query['event'], 'organization'>

const query = `
select 
  id,
  name,
  time_of_event as "timeOfEvent",
  description,
  updated_at as "updatedAt",
  created_at as "createdAt",
  organization_id as "organizationId"
from 
  event 
where id = $1;
`
type QueryEvent = Omit<Event, 'organization'> & {
  organizationId: number
}
