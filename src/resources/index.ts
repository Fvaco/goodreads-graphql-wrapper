import { gql, makeExecutableSchema } from 'apollo-server';
import * as Book from './book';
import * as Author from './author';

const typeDefs = gql`
    type Query
`;

export const getSchema = () =>
    makeExecutableSchema({
        typeDefs: [typeDefs, Book.typeDefs, Author.typeDefs],
        resolvers: {
            Query: {
                ...Book.Query(),
                ...Author.Query(),
            },
        },
    });

export const dataSources = () => ({ bookDataSource: Book.dataSource, authorDataSource: Author.dataSource });
