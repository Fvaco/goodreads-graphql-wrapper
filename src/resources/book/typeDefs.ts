import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        getBookById(id: ID): Book!
    }
    type Book {
        id: ID!
        isbn: String
        isbn13: String
        title: String
        numPages: String
        description: String
        published: String
        publisher: String
        averageRating: String
        ratingsCount: String
        textReviewsCount: String
        isEbook: String
        languageCode: String
        similarBooks: [Book]
    }
`;
