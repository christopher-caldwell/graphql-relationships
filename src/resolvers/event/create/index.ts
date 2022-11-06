import { Resolver } from '../../types'
import { Mutation, MutationCreateEventArgs, Event } from '../../../generated-types'

export const createEvent: Resolver<undefined, EventResult, MutationCreateEventArgs> = async (
  _,
  { name, timeOfEvent, description, organizationId },
  { Client }
) => {
  // TODO: Find org first, throw if not there

  const { rows } = await Client.query<Omit<Event, 'organization'>>(query, [
    name,
    timeOfEvent,
    description,
    organizationId
  ])

  const newEvent = rows[0]

  return newEvent
}

type EventResult = Omit<Mutation['createEvent'], 'organization'>

const query = `
insert into 
  event(name, time_of_event, description, organization_id)
  values($1, $2, $3, $4)
returning
  id, 
  name, 
  time_of_event as "timeOfEvent", 
  description, 
  created_at as "createdAt", 
  updated_at as "updatedAt";
`
