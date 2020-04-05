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
        const similarWorks = newJSON.GoodreadsResponse.book.similar_books.book;

        const finalArr = similarWorks.map((book: any) => {
            const final: Record<string, any> = {};

            for (const key in book) {
                if (Object.keys(book[key]).length) {
                    final[key] = 'no data available';
                } else {
                    final[key] = book[key];
                }
            }
            return final;
        });

        return {
            book: theBook,

            similarBooks: finalArr.map((book: any) => {
                return book;
            }),
        };
    }
}

export const dataSource = new DataSource();
