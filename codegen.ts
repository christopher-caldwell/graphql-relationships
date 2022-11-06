import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:5001/graphql',
  config: {
    sort: false,
    skipTypename: true,
    scalars: {
      Date: 'Date'
    }
  },
  generates: {
    'src/generated-types/index.ts': {
      plugins: ['typescript', 'typescript-operations']
    }
  }
}

export default config
