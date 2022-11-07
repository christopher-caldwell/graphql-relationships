import { QueryOrganizationArgs } from '../../../generated-types'
import { Resolver } from '../../types'
import { BareOrganization } from '../loader'

export const organization: Resolver<undefined, BareOrganization, QueryOrganizationArgs> = async (
  _,
  { id },
  { Client }
) => {
  const { rows } = await Client.query<BareOrganization>(query, [id])
  const targetOrg = rows[0]
  if (!targetOrg) throw new Error(`Cannot find organization with ID: ${id}`)

  return targetOrg
}

const query = `
select
  id,
  name,
  created_at as "createdAt", 
  updated_at as "updatedAt"
from
  organization
where id = $1;
`
