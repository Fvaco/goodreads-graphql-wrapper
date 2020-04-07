import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        getAuthorDataById(id: ID!): AuthorData!
        findAuthorIdByName(name: String): Author
    }
    type Author {
        id: ID!
        name: String
        goodReadsURL: String
    }
    type AuthorData {
        author: Author!
        books: [Book]
        about: String
        influences: String
        hometown: String
        works_count: String
    }
`;
