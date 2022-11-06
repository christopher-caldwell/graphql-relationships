export const LocationSchema = `#graphql
  type Location {
    id: Int!
    address: String!
    latitude: Float!
    longitude: Float!
    createdAt: Date!
    updatedAt: Date!
    organization: Organization!
  }

  extend type Query {
    location(id: Int!): Location!
    locationsForOrg(orgId: Int!): [Location!]!
  }

  extend type Mutation {
    createLocation(address: String!, latitude: Float, longitude: Float, organizationId: Int!): Location!
    updateLocation(id: Int!): Location!
    deleteLocation(id: Int!): MutationResult!
  }
`
