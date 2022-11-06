import express from 'express'
import cors from 'cors'
import adze from 'adze'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { schema } from './schema'
import { resolvers } from './resolvers'
import { DbClient as Client } from './db'

const app = express()
app.use(cors())

const logger = adze()

const main = async () => {
  await Client.connect()

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: makeExecutableSchema({ typeDefs: schema, resolvers }),
      graphiql: true,
      context: {
        Client
      }
    })
  )

  app.listen(5001, () => {
    logger.info(`🚀 Skynet is active`)
  })
}

main()
