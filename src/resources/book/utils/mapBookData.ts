import { AuthorInfo } from '~/resources/author/Author';
import { mapAuthorInfoData } from '~/resources/author/utils/mapAuthorInfoData';
import { mapRawData, RawInfo } from '~/utils/mapRawData';
import { Book } from '../Book';

export const mapBookData = (rawData: RawInfo): Book | RawInfo => {
    return mapRawData<Book>(rawData, {
        similar_books: ({ book }: { book: RawInfo[] }): Book[] | RawInfo => {
            return book.map((similarBook) => mapBookData(similarBook));
        },
        authors: ({ author }: { author: RawInfo[] | RawInfo }): AuthorInfo[] | RawInfo => {
            if (Array.isArray(author)) return author.map((auth) => mapAuthorInfoData(auth));
            return [mapAuthorInfoData(author)];
        },
    });
};
