import { QueryLocationArgs } from '../../../generated-types'
import { Resolver } from '../../types'
import { BareLocation } from '../loader'

export const location: Resolver<undefined, BareLocation, QueryLocationArgs> = async (_, { id }, { Client }) => {
  const { rows } = await Client.query<BareLocation>(query, [id])
  const targetLocation = rows[0]
  if (!targetLocation) throw new Error(`Cannot find location with ID: ${id}`)

  return targetLocation
}

const query = `
select
  id, 
  address, 
  latitude, 
  longitude, 
  created_at as "createdAt", 
  updated_at as "updatedAt",
  organization_id as "organizationId"
from
  location
where id = $1;
`
