import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

const BASE_URL = 'https://www.goodreads.com';

export class GoodreadsDataSource extends RESTDataSource {
    constructor() {
        super();
    }
    get baseURL() {
        return BASE_URL;
    }
    willSendRequest(request: RequestOptions) {
        const goodreadsAPIKey = process.env.API_KEY || '';
        request.params.set('key', goodreadsAPIKey);
    }

    // async getAuthor(nameObject: Record<string, any>) {
    //     return this.get(BASE_URL + `/api/author_url/${nameObject.name}?key=${process.env.API_KEY}`)
    //         .then((res) => {
    //             return xmlParser.toJson(res);
    //         })
    //         .then((newJSON) => {
    //             const body = JSON.parse(newJSON);
    //             return body.GoodreadsResponse.author;
    //         });
    // }

    // async getAuthorData(inputObject: Record<string, any>) {
    //     const xmlResp = await this.get(
    //         BASE_URL + `author/show/${inputObject.authorId}?format=xml&key=${process.env.API_KEY}`,
    //     );

    //     const resp = await xmlParser.toJson(xmlResp);
    //     const newJSON = JSON.parse(resp);

    //     const theAuthor = newJSON.GoodreadsResponse.author;
    //     const about = newJSON.GoodreadsResponse.author.about;
    //     const initBookArr = newJSON.GoodreadsResponse.author.books.book;

    //     const finalArr = initBookArr.map((book: any) => {
    //         return _.mapValues(book, (val) => (val.nil ? null : val));
    //     });

    //     return {
    //         author: theAuthor,
    //         about: about,
    //         influences: newJSON.GoodreadsResponse.author.influences,
    //         hometown: newJSON.GoodreadsResponse.author.hometown,
    //         worksCount: newJSON.GoodreadsResponse.author.works_count,
    //         books: finalArr.map((book: any) => {
    //             return {
    //                 id: book.id.$t,
    //                 isbn: book.isbn,
    //                 title: book.title,
    //                 numPages: book.num_pages,
    //                 publisher: book.publisher,
    //                 published: book.published,
    //                 description: book.description,
    //             };
    //         }),
    //     };
    // }

    // async getInfoForBook(inputObject: Record<string, any>) {
    //     const xmlResp = await this.get(
    //         BASE_URL + `book/show/${inputObject.bookId}?format=xml&key=${process.env.API_KEY}`,
    //     );

    //     const resp = await xmlParser.toJson(xmlResp);
    //     const newJSON = JSON.parse(resp);

    //     const theBook = newJSON.GoodreadsResponse.book;
    //     const similarWorks = newJSON.GoodreadsResponse.book.similar_books.book;

    //     const finalArr = similarWorks.map((book: any) => {
    //         const final: Record<string, any> = {};

    //         for (const key in book) {
    //             if (Object.keys(book[key]).length) {
    //                 final[key] = 'no data available';
    //             } else {
    //                 final[key] = book[key];
    //             }
    //         }
    //         return final;
    //     });

    //     return {
    //         book: theBook,

    //         similarBooks: finalArr.map((book: any) => {
    //             return book;
    //         }),
    //     };
    // }
}
