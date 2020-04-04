import { Author } from '../author/Author';
export type Book = {
    id: number;
    title: string;
    author: Author;
    imageUrl: string;
    smallImageUrl: string;
};
