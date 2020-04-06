import { Book } from '../book/Book';
export type Author = {
    books: [Book];
    about: String;
    influences: String;
    hometown: String;
    works_count: String;
};
