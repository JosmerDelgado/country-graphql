import { gql } from 'apollo-boost'

const COUNTRY_QUERY = gql` query COUNTRY_QUERY{
    countries {
      name
      code
    }
  }
`

export default COUNTRY_QUERY