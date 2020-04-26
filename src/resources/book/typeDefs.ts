import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        getBookById(id: ID): Book!
    }
    type Work {
        id: ID!
    }

    type SimilarBook {
        id: ID!
        title: String
        titleWithoutSeries: String
        link: String
        smallImageUrl: String
        imageUrl: String
        numPages: String
        work: Work
        isbn: String
        isbn13: String
        averageRating: String
        ratingsCount: String
        publicationYear: String
        publicationMonth: String
        publicationDay: String
        authors: [Author]
    }

    type Book {
        id: ID!
        authors: [AuthorInfo]
        isbn: String
        isbn13: String
        title: String
        titleWithoutSeries: String
        numPages: String
        description: String
        publicationYear: String
        publicationMonth: String
        publicationDay: String
        published: String
        publisher: String
        averageRating: String
        ratingsCount: String
        textReviewsCount: String
        isEbook: Boolean
        languageCode: String
        similarBooks: [SimilarBook]
    }
`;
