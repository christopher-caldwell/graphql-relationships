import { Resolver } from '../../types'
import { QueryEventsForOrgArgs } from '../../../generated-types'
import { BareEvent } from '../loader'

export const eventsForOrg: Resolver<undefined, QueryEvent[], QueryEventsForOrgArgs> = async (
  _,
  { orgId },
  { Client }
) => {
  const { rows } = await Client.query<QueryEvent>(query, [orgId])
  return rows
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
type QueryEvent = Omit<BareEvent, 'organization'> & {
  organizationId: number
}
