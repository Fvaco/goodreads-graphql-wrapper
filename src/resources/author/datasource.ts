import xmlParser from 'xml2json';
import { GoodreadsDataSource } from '~/lib/data-sources/goodreads';
import { RawInfo } from '~/utils/mapRawData';
import { Author, AuthorInfo } from './Author';
import { mapAuthorInfoData } from './utils/mapAuthorInfoData';

type XMLtoJSONParseFn = <T>(xml: string) => T;
type GoodreadsResponse = { GoodreadsResponse: { [key: string]: string } };

const getJSONFromXML: XMLtoJSONParseFn = (xml: string) => {
    const rawAuthorInfoJSON = xmlParser.toJson(xml);
    return JSON.parse(rawAuthorInfoJSON);
};
export class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getAuthorInfoById({ authorId }: { authorId: string }): Promise<AuthorInfo | RawInfo> {
        const xmlAuthorInfo = await this.get(`author/show/${authorId}?format=xml`);

        const parsedRawAuthorInfoJSON = getJSONFromXML<GoodreadsResponse>(xmlAuthorInfo);

        const { author: rawAuthorInfo } = parsedRawAuthorInfoJSON.GoodreadsResponse;

        return mapAuthorInfoData(rawAuthorInfo);
    }
    async findAuthorByName({ authorName }: { authorName: string }): Promise<Author | RawInfo> {
        const xmlAuthor = await this.get(`api/author_url/${authorName}`);
        const parsedRawAuthorInfoJSON = getJSONFromXML<GoodreadsResponse>(xmlAuthor);
        const { author: rawAuthor } = parsedRawAuthorInfoJSON.GoodreadsResponse;
        return mapAuthorInfoData(rawAuthor);
    }
}

export const dataSource = new DataSource();
