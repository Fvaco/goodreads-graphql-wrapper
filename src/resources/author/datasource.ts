import { GoodreadsDataSource } from '../../data-sources/goodreads';
import xmlParser from 'xml2json';
import { camelCase } from 'lodash';

class DataSource extends GoodreadsDataSource {
    constructor() {
        super();
    }

    async getAuthorInfoById(inputObject: Record<string, any>) {
        const xmlAuthorInfo = await this.get(`author/show/${inputObject.authorId}?format=xml`);

        const handleObjectField = (objectValue: Record<string, any>) => {
            if (!!objectValue) {
                const { type, $t } = objectValue;
                if (!!$t) {
                    if (!!type && type === 'integer') return parseInt($t);
                    return $t;
                }
            }
            return null;
        };
        const handleBooksField = ({ book }: Record<string, any>) => book;

        const rawAuthorInfoJSON = await xmlParser.toJson(xmlAuthorInfo);
        const parsedRawAuthorInfoJSON = JSON.parse(rawAuthorInfoJSON);
        const rawAuthorInfo = parsedRawAuthorInfoJSON.GoodreadsResponse.author;
        return Object.entries(rawAuthorInfo).reduce((result: Record<string, any>, [key, value]: [string, any]) => {
            const isBooksField = key === 'books';
            const booksValue = isBooksField && handleBooksField(value);
            if (isBooksField) return { ...result, books: booksValue };

            const currentValue = typeof value === 'object' && !!value ? handleObjectField(value) : value;
            return { ...result, [camelCase(key)]: currentValue };
        }, {});
    }
}

export const dataSource = new DataSource();
