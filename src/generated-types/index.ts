export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: Date
}

export type Event = {
  id: Scalars['Int']
  name: Scalars['String']
  timeOfEvent: Scalars['Date']
  description?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  updatedAt: Scalars['Date']
  organization: Organization
}

export type Location = {
  id: Scalars['Int']
  address: Scalars['String']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  createdAt: Scalars['Date']
  updatedAt: Scalars['Date']
  organization: Organization
}

export type Organization = {
  id: Scalars['Int']
  name: Scalars['String']
  createdAt: Scalars['Date']
  updatedAt: Scalars['Date']
  events: Array<Event>
  locations: Array<Location>
}

export type Query = {
  _?: Maybe<Scalars['Boolean']>
  event: Event
  eventsForOrg: Array<Event>
  location: Location
  locationsForOrg: Array<Location>
  organization: Organization
  organizationsForOrg: Array<Organization>
}

export type QueryEventArgs = {
  id: Scalars['Int']
}

export type QueryEventsForOrgArgs = {
  orgId: Scalars['Int']
}

export type QueryLocationArgs = {
  id: Scalars['Int']
}

export type QueryLocationsForOrgArgs = {
  orgId: Scalars['Int']
}

export type QueryOrganizationArgs = {
  id: Scalars['Int']
}

export type QueryOrganizationsForOrgArgs = {
  orgId: Scalars['Int']
}

export type Mutation = {
  _?: Maybe<Scalars['Boolean']>
  createEvent: Event
  updateEvent: Event
  deleteEvent: MutationResult
  createLocation: Location
  updateLocation: Location
  deleteLocation: MutationResult
  createOrganization: Organization
  updateOrganization: Organization
  deleteOrganization: MutationResult
}

export type MutationCreateEventArgs = {
  name: Scalars['String']
  timeOfEvent: Scalars['Date']
  description: Scalars['String']
  organizationId: Scalars['Int']
}

export type MutationUpdateEventArgs = {
  id: Scalars['Int']
}

export type MutationDeleteEventArgs = {
  id: Scalars['Int']
}

export type MutationCreateLocationArgs = {
  address: Scalars['String']
  latitude?: InputMaybe<Scalars['Float']>
  longitude?: InputMaybe<Scalars['Float']>
  organizationId: Scalars['Int']
}

export type MutationUpdateLocationArgs = {
  id: Scalars['Int']
}

export type MutationDeleteLocationArgs = {
  id: Scalars['Int']
}

export type MutationCreateOrganizationArgs = {
  name: Scalars['String']
}

export type MutationUpdateOrganizationArgs = {
  id: Scalars['Int']
}

export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int']
}

export type MutationResult = {
  message?: Maybe<Scalars['String']>
}
