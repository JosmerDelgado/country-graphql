import ApolloClient, { InMemoryCache } from 'apollo-boost';
import resolvers from './resolvers'
import typeDefs from './typeDefs'


const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com',
    resolvers,
    typeDefs
});

export default client