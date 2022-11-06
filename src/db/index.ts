import { Client } from 'pg'

const dbUser = process.env.PGUSER || 'postgres'
const dbPassword = process.env.PGPASSWORD || 'password1'
const dbHost = process.env.PGHOST || 'localhost'
const dbName = process.env.PGDATABASE || 'econnify'
const dbPort = process.env.PGPORT || '5432'

export const DbClient = new Client({
  host: dbHost,
  database: dbName,
  port: Number(dbPort),
  user: dbUser,
  password: dbPassword
})
