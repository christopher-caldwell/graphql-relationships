import { BareOrganization } from '../organization/loader'
import { Resolver } from '../types'

const query = `
select 
  id,
  address, 
  latitude, 
  longitude, 
  created_at as "createdAt", 
  updated_at as "updatedAt"
from 
  location
where 
  organization_id = $1;
`

export type BareLocation = Omit<Location, 'organization'>
export const locations: Resolver<BareOrganization, BareLocation[]> = async ({ id }, _, { Client }) => {
  // This could be optimized with caching
  const { rows } = await Client.query<BareLocation>(query, [id])
  return rows
}
