import { DataLoader } from '@caldwell619/data-loader'

import { DbClient } from '../../db'
import { Organization } from '../../generated-types'
import { IdOverride, Resolver } from '../../resolvers/types'

const query = `
select 
  id,
  name,
  created_at as "createdAt",
  updated_at as "updatedAt"
from organization
where 
  id = ANY($1::int[]);
`

export type BareOrganization = Omit<Organization, 'events' | 'locations'>

export const OrganizationLoader = new DataLoader<IdOverride<BareOrganization>>({
  async fetcher(ids) {
    const { rows } = await DbClient.query<IdOverride<BareOrganization>>(query, [ids])
    return rows
  }
})

export const organization: Resolver<{ organizationId: number }, Omit<Organization, 'events' | 'locations'>> = ({
  organizationId
}) => {
  return OrganizationLoader.load(organizationId)
}
