export const SharedSchema = `#graphql
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }

  type MutationResult {
    message: String
  }
`
