import { GoodreadsDataSource } from '../../data-sources/goodreads';
import xmlParser from 'xml2json';
import _ from 'lodash';

class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getInfoForBook(inputObject: Record<string, any>) {
        const xmlResp = await this.get(`book/show/${inputObject.bookId}?format=xml`);

        const resp = await xmlParser.toJson(xmlResp);
        const newJSON = JSON.parse(resp);
        const theBook = newJSON.GoodreadsResponse.book;
        const similarBooks = newJSON.GoodreadsResponse.book.similar_books?.book;
        return {
            ...theBook,
            similarBooks,
        };
    }
}

export const dataSource = new DataSource();
