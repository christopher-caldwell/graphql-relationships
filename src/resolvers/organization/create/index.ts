import { Resolver } from '../../types'
import { Mutation, MutationCreateOrganizationArgs, Organization } from '../../../generated-types'

export const createOrganization: Resolver<
  undefined,
  Mutation['createOrganization'],
  MutationCreateOrganizationArgs
> = async (_, { name }, { Client }) => {
  const { rows } = await Client.query<Omit<Organization, 'locations' | 'events'>>(query, [name])

  return {
    ...rows[0],
    events: [],
    locations: []
  }
}

const query = `
insert into 
  organization(name) 
  values($1) 
returning 
  id, 
  name, 
  created_at as "createdAt", 
  updated_at as "updatedAt" ;
`
