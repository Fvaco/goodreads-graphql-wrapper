import xmlParser from 'xml2json';
import { GoodreadsDataSource } from '~/lib/data-sources/goodreads';
import { mapAuthorInfoData } from './utils/mapAuthorInfoData';
import { AuthorInfo } from './Author';
import { RawInfo } from '~/utils/mapRawData';

export class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getAuthorInfoById(inputObject: { authorId: string }): Promise<AuthorInfo | RawInfo> {
        const xmlAuthorInfo = await this.get(`author/show/${inputObject.authorId}?format=xml`);

        const rawAuthorInfoJSON = xmlParser.toJson(xmlAuthorInfo);
        const parsedRawAuthorInfoJSON = JSON.parse(rawAuthorInfoJSON);

        const { author: rawAuthorInfo } = parsedRawAuthorInfoJSON.GoodreadsResponse;

        return mapAuthorInfoData(rawAuthorInfo);
    }
}

export const dataSource = new DataSource();
