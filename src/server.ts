require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

import { GoodReadsAPI } from './data_sources/goodreads';

const goodreadsAPI = new GoodReadsAPI();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        goodreadsAPI,
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
