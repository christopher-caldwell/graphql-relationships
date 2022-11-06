import type { Client } from 'pg'
import type { Key } from 'node-cache'

export interface Context {
  Client: Client
}

export type Resolver<TParent, ReturnType, Variables = Record<string, string>> = (
  parent: TParent,
  variables: Variables,
  context: Context
) => Promise<ReturnType>

export type IdOverride<T> = T & { id: Key }

// Need to get wild to handle sub resolvers
/*eslint-disable-next-line*/
type OmitDistributive<T, K extends PropertyKey> = T extends any ? (T extends object ? Id<DeepOmit<T, K>> : T) : never
/*eslint-disable-next-line*/
type Id<T> = {} & { [P in keyof T]: T[P] }
export type DeepOmit<T, K extends PropertyKey> = Omit<{ [P in keyof T]: OmitDistributive<T[P], K> }, K>
