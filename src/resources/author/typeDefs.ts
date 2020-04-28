import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        getAuthorInfoById(id: ID!): AuthorInfo!
        findAuthorByName(name: String): Author!
    }
    type Author {
        id: ID!
        name: String
        link: String
    }
    type AuthorInfo {
        id: ID
        name: String
        link: String
        fansCount: Int
        authorFollowersCount: Int
        largeImageUrl: String
        imageUrl: String
        smallImageUrl: String
        about: String
        influences: String
        worksCount: Int
        gender: String
        hometown: String
        bornAt: String
        diedAt: String
        goodreadsAuthor: Boolean
        books: [Book]
    }
`;
