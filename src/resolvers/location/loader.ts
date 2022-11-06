import { DataLoader } from '@caldwell619/data-loader'

import { DbClient } from '../../db'
import { Location } from '../../generated-types'
import { IdOverride } from '../../resolvers/types'

const query = `select 
id,
address,
latitude,
longitude,
created_at as "createdAt",
updated_at as "updatedAt",
organization_id as "organizationId"
from location
where id in $1
`

export const LocationLoader = new DataLoader<IdOverride<Location>>({
  async fetcher(ids) {
    const { rows } = await DbClient.query<IdOverride<Location>>(query, [ids])
    return rows
  }
})
