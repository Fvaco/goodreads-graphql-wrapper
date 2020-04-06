require('dotenv').config();
import { ApolloServer } from 'apollo-server';

import { dataSources, getSchema } from './resources';

const server = new ApolloServer({
    schema: getSchema(),
    dataSources,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
