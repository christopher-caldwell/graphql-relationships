import { GraphQLScalarType } from 'graphql'

export const DateScalar = new GraphQLScalarType<Date, Date>({
  name: 'Date',
  parseValue(value) {
    if (typeof value !== 'string') throw new Error('[DateScalar]: Cannot parse non string')
    return new Date(value as string)
  }
})
