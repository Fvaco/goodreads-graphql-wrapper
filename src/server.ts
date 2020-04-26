import 'module-alias/register';
import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';

import { getDataSources, getSchema } from './resources';

config();
const server = new ApolloServer({
    schema: getSchema(),
    dataSources: getDataSources(),
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
