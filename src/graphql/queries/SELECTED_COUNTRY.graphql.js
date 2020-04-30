import {gql} from 'apollo-boost'

const SELECTED_COUNTRY = gql`
    query selectedCountry {
        countrySelected @client
    }
`

export default SELECTED_COUNTRY