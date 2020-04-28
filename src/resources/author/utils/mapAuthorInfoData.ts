import { mapBookData } from '~/resources/book/utils/mapBookData';
import { mapRawData, RawInfo } from '~/utils/mapRawData';
import { AuthorInfo } from '../Author';

export const mapAuthorInfoData = (rawAuthorInfo: RawInfo): AuthorInfo | RawInfo => {
    return mapRawData<AuthorInfo>(rawAuthorInfo, {
        books: ({ book: authorBooks }: { book: any }) =>
            Array.isArray(authorBooks) ? authorBooks.map((book) => mapBookData(book)) : [mapBookData(authorBooks)],
        works_count: (value: string) => +value,
    });
};
