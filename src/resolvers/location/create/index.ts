import { Resolver } from '../../types'
import { Mutation, MutationCreateLocationArgs, Location } from '../../../generated-types'

export const createLocation: Resolver<undefined, LocationResult, MutationCreateLocationArgs> = async (
  _,
  { address, latitude: givenLatitude, longitude: givenLongitude, organizationId },
  { Client }
) => {
  // TODO: Find org first, throw if not there

  const { latitude, longitude } = await getGoogleLatAndLong(givenLongitude, givenLatitude)
  const { rows } = await Client.query<Omit<Location, 'organization'>>(query, [
    address,
    latitude,
    longitude,
    organizationId
  ])

  const newLocation = rows[0]

  return newLocation
}

type LocationResult = Omit<Mutation['createLocation'], 'organization'>

const query = `
insert into 
  location(address, latitude, longitude, organization_id)
  values($1, $2, $3, $4)
returning
  id, 
  address, 
  latitude, 
  longitude, 
  created_at as "createdAt", 
  updated_at as "updatedAt";
`

// Replace with Google stuff for bonus
const getGoogleLatAndLong = async (givenLong: number, givenLat: number) => {
  return {
    latitude: givenLat || 1,
    longitude: givenLong || 2
  }
}
