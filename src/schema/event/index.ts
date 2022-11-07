export const EventSchema = `#graphql
  type Event {
    id: Int!
    name: String!
    timeOfEvent: Date!
    description: String
    createdAt: Date!
    updatedAt: Date!
    organization: Organization!
  }

  extend type Query {
    event(id: Int!): Event!
    events: [Event!]!
    eventsForOrg(orgId: Int!): [Event!]!
  }

  extend type Mutation {
    createEvent(name: String!, timeOfEvent: Date!, description: String!, organizationId: Int!): Event!
    updateEvent(id: Int!): Event!
    deleteEvent(id: Int!): MutationResult!
  }
`
