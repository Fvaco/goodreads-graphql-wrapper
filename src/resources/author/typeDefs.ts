import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        getAuthorById(id: ID!): Author!
    }
    type Author {
        author: Author!
        books: [Book]
        about: String
        influences: String
        hometown: String
        works_count: String
    }
`;
