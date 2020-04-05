import { gql, makeExecutableSchema } from 'apollo-server';
import * as Book from './book';

const typeDefs = gql`
    type Query
`;

export const getSchema = () =>
    makeExecutableSchema({
        typeDefs: [typeDefs, Book.typeDefs],
        resolvers: { ...Book.resolvers },
    });

export const dataSources = () => ({ bookDataSource: Book.dataSource });
