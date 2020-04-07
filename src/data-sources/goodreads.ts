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
}
