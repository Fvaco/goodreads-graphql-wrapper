import xmlParser from 'xml2json';
import { GoodreadsDataSource } from '~/lib/data-sources/goodreads';
import { RawInfo } from '~/utils/mapRawData';
import { AuthorInfo } from './Author';
import { mapAuthorInfoData } from './utils/mapAuthorInfoData';



export class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getAuthorInfoById({ authorId }: { authorId: string }): Promise<AuthorInfo | RawInfo> {
        const xmlAuthorInfo = await this.get(`author/show/${authorId}?format=xml`);

        const rawAuthorInfoJSON = xmlParser.toJson(xmlAuthorInfo);
        const parsedRawAuthorInfoJSON = JSON.parse(rawAuthorInfoJSON);

        const { author: rawAuthorInfo } = parsedRawAuthorInfoJSON.GoodreadsResponse;

        return mapAuthorInfoData(rawAuthorInfo);
    }
}

export const dataSource = new DataSource();
