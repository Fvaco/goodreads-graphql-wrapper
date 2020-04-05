import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        bookData(id: ID): Book!
        getBookByID(id: ID): Book!
    }
    type Book {
        id: ID!
        isbn: String
        title: String
        num_pages: String
        description: String
        published: String
        publisher: String
        average_rating: String
        ratings_count: String
        text_reviews_count: String
        is_ebook: Boolean
        language_code: String
        similar_books: [Book]
    }
`;
