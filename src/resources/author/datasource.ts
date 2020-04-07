import { GoodreadsDataSource } from '../../data-sources/goodreads';
import xmlParser from 'xml2json';
import _ from 'lodash';

class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getAuthorDataById(inputObject: Record<string, any>) {
        const xmlResp = await this.get(`author/show/${inputObject.authorId}?format=xml`);

        const resp = await xmlParser.toJson(xmlResp);
        const newJSON = JSON.parse(resp);

        const theAuthor = newJSON.GoodreadsResponse.author;
        const about = newJSON.GoodreadsResponse.author.about;
        const initBookArr = newJSON.GoodreadsResponse.author.books.book;
        const finalArr = initBookArr.map((book: any) => {
            return _.mapValues(book, (val) => (val.nil ? null : val));
        });
        const returnObject = {
            author: theAuthor,
            about: about,
            influences: newJSON.GoodreadsResponse.author.influences,
            hometown: newJSON.GoodreadsResponse.author.hometown,
            worksCount: newJSON.GoodreadsResponse.author.works_count,
            books: finalArr.map((book: any) => {
                return {
                    id: book.id.$t,
                    isbn: book.isbn,
                    title: book.title,
                    numPages: book.num_pages,
                    publisher: book.publisher,
                    published: book.published,
                    description: book.description,
                };
            }),
        };

        return returnObject;
    }
}

export const dataSource = new DataSource();
