import { Book } from '../book/Book';

export interface Author {
    books: [Book];
    about: string;
    influences: string;
    hometown: string;
    worksCount: string;
}

export interface AuthorInfo {
    id: string;
    name: string;
    link: string;
    fansCount: number;
    authorFollowersCount: number;
    largeImageUrl: string;
    imageUrl: string;
    smallImageUrl: string;
    about: string;
    influences: string;
    worksCount: string;
    gender: string;
    hometown: string;
    bornAt: string;
    diedAt: string;
    goodreadsAuthor: boolean;
    books: [Book];
}
