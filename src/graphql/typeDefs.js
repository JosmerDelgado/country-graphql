import { gql } from "apollo-boost"

const typeDefs = gql`
extend type Country {
    findArepa: Boolean!
}
`
export default typeDefs