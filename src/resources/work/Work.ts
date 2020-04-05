import { Book } from '../book/Book';

export type Work = {
    id: number;
    booksCount: number;
    ratingsCount: number;
    textReviewsCount: number;
    originalPublicationYear: number;
    originalPublicationMonth: number;
    originalPublicationDay: number;
    averageRating: number;
    bestBook: Partial<Book>;
};
