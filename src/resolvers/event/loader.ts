import { Event } from '../../generated-types'
import { BareOrganization } from '../organization/loader'
import { Resolver } from '../types'

const query = `
select 
  id,
  name, 
  time_of_event as "timeOfEvent", 
  description, 
  created_at as "createdAt", 
  updated_at as "updatedAt"
from 
  event
where 
  organization_id = $1;
`

export type BareEvent = Omit<Event, 'organization'>
export const events: Resolver<BareOrganization, BareEvent[]> = async ({ id }, _, { Client }) => {
  // This could be optimized with caching
  const { rows } = await Client.query<BareEvent>(query, [id])
  return rows
}
