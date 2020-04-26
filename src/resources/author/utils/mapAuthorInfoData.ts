import { mapRawData, RawInfo } from '~/utils/mapRawData';
import { Book } from '~/resources/book/Book';
import { AuthorInfo } from '../Author';

export const mapAuthorInfoData = (rawAuthorInfo: RawInfo): AuthorInfo | RawInfo =>
    mapRawData<AuthorInfo>(rawAuthorInfo, {
        books: (value: any) => [...value.book.map((item: { [key: string]: string }) => mapRawData<Book>(item))],
    });
