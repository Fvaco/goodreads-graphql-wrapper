import { AuthorInfo } from '~/resources/author/Author';
import { mapAuthorInfoData } from '~/resources/author/utils/mapAuthorInfoData';
import { mapRawData, RawInfo } from '~/utils/mapRawData';
import { Book } from '../Book';

export const mapBookData = (rawData: RawInfo): Book | RawInfo => {
    return mapRawData<Book>(rawData, {
        similar_books: ({ book }: { book: RawInfo[] | RawInfo }): Book[] | RawInfo =>
            Array.isArray(book) ? book.map((similarBook) => mapBookData(similarBook)) : [mapBookData(book)],
        authors: ({ author }: { author: RawInfo[] | RawInfo }): AuthorInfo[] | RawInfo =>
            Array.isArray(author) ? author.map((auth) => mapAuthorInfoData(auth)) : [mapAuthorInfoData(author)],
    });
};
