import { AuthorInfo } from '../author/Author';
export interface Book {
    authors: [AuthorInfo];
    averageRating: string;
    description: string;
    id: number;
    imageUrl: string;
    isbn: string;
    isbn13: string;
    isEbook: boolean;
    languageCode: string;
    numPages: string;
    published: string;
    publicationYear: string;
    publicationMonth: string;
    publicationDay: string;
    publisher: string;
    ratingsCount: string;
    similarBooks: [Book];
    smallImageUrl: string;
    textReviewsCount: string;
    title: string;
    titleWithoutSeries: string;
}
