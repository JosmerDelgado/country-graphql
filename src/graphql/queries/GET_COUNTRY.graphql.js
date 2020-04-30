import { gql } from 'apollo-boost'

const GET_COUNTRY = gql`query getCountry($code: ID!){
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      code
      languages {
        code
        name
      }
      findArepa @client
    }
  }
  `

export default GET_COUNTRY