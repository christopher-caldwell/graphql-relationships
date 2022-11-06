# Sample Queries

## Mutations

````graphql
mutation CreateOrg {
  createOrganization(name: "Acme Corp") {
    id
  }
}
`

```graphql
mutation CreateLocation {
  createLocation(address: "123 Sesame Street", latitude: 10, longitude: 10, organizationId: 1) {
    id
  }
}
````

```graphql
mutation CreateEvent {
  createEvent(
    name: "Super Happy Fun Time"
    timeOfEvent: "2022-01-02T10:00:00"
    description: "Lot's of fun in the sun"
    organizationId: 1
  ) {
    id
  }
}
```

## Queries

```graphql
query Event {
  event(id: 1) {
    name
  }
}
```
