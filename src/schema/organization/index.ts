export const OrganizationSchema = `#graphql
  type Organization {
    id: Int!
    name: String!
    createdAt: Date!
    updatedAt: Date!
    events: [Event!]!
    locations: [Location!]!
  }

  extend type Query {
    organization(id: Int!): Organization!
    organizationsForOrg(orgId: Int!): [Organization!]!
  }

  extend type Mutation {
    createOrganization(name: String!): Organization!
    updateOrganization(id: Int!): Organization!
    deleteOrganization(id: Int!): MutationResult!
  }
`
