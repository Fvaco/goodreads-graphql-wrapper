import { GoodreadsDataSource } from '~/lib/data-sources/goodreads';
import { getJSONFromXML } from '~/utils/getJSONFromXML';
import { RawInfo } from '~/utils/mapRawData';
import { Book } from './Book';
import { mapBookData } from './utils/mapBookData';

type GoodreadsResponse = { GoodreadsResponse: { [key: string]: string } };

export class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getBookById(inputObject: { bookId: string }): Promise<Book | RawInfo> {
        const xmlResp = await this.get(`book/show/${inputObject.bookId}?format=xml`);
        const parsedRawBook = getJSONFromXML<GoodreadsResponse>(xmlResp);

        const { book: rawBook } = parsedRawBook.GoodreadsResponse;
        return mapBookData(rawBook);
    }
}

export const dataSource = new DataSource();
