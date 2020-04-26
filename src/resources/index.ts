import { gql, makeExecutableSchema } from 'apollo-server';
import { RESTDataSource } from 'apollo-datasource-rest';

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

export const getDataSources = (): (() => { [key: string]: RESTDataSource }) => () => ({
    bookDataSource: Book.dataSource,
    authorDataSource: Author.dataSource,
});
