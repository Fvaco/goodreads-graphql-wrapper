import { GoodreadsDataSource } from '../../lib/data-sources/goodreads';
import xmlParser from 'xml2json';
import { mapBookData } from './utils/mapBookData';

export class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getBookById(inputObject: { bookId: string }) {
        const xmlResp = await this.get(`book/show/${inputObject.bookId}?format=xml`);
        const resp = xmlParser.toJson(xmlResp);
        const newJSON = JSON.parse(resp);
        const { book: rawBook } = newJSON.GoodreadsResponse;
        return mapBookData(rawBook);
    }
}

export const dataSource = new DataSource();
