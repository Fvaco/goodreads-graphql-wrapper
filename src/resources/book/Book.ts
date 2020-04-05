import { Author } from '../author/Author';
export type Book = {
    author: Author;
    averageRating: string;
    description: string;
    id: number;
    imageUrl: string;
    isbn: string;
    isEbook: boolean;
    languageCode: string;
    numPages: string;
    published: string;
    publisher: string;
    ratingsCount: string;
    similarBooks: [Book];
    smallImageUrl: string;
    textReviewsCount: string;
    title: string;
};
