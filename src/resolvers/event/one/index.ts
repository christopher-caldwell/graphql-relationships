import { Resolver } from '../../types'
import { QueryEventArgs } from '../../../generated-types'
import { BareEvent } from '../loader'

export const event: Resolver<undefined, BareEvent, QueryEventArgs> = async (_, { id }, { Client }) => {
  const { rows } = await Client.query<QueryEvent>(query, [id])
  const possibleEvent = rows[0]
  if (!possibleEvent) throw new Error(`Cannot find event by ID: ${id}`)
  return possibleEvent
}

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
type QueryEvent = BareEvent & {
  organizationId: number
}
