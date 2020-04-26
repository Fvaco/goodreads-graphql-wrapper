import 'module-alias/register';
import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';

import { dataSources, getSchema } from './resources';

config();
const server = new ApolloServer({
    schema: getSchema(),
    dataSources,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
